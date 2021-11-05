import babelGenerator from '@babel/generator';
import { parse } from '@babel/parser';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import fs from 'fs-extra';
import path, { dirname, resolve } from 'path';
import * as CONSTANTS from '../configs/constants.js';
import { getInitializer, getTags, hasDecorator } from '../utils/index.js';

// TODO
const generator = babelGenerator.default || babelGenerator;
const traverse = babelTraverse.default || babelTraverse;

// TODO
const getType = (file, node, { directory }) => {

    if (node.type != 'TSTypeReference') return node;

    let result;

    traverse(file, {
        ClassDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
        ImportDeclaration(path) {

            for (const specifier of path.node.specifiers) {

                const alias = specifier.local.name;

                if (alias != node.typeName.name) continue;

                let key;

                switch (specifier.type) {

                    case 'ImportNamespaceSpecifier':
                        key = '*';
                        break;

                    case 'ImportDefaultSpecifier':
                        key = 'default';
                        break;

                    case 'ImportSpecifier':
                        key = specifier.imported.name;
                        break;
                }

                try {

                    const filename = resolve(directory, path.node.source.value + '.ts');

                    path.$ast = path.$ast || parse(
                        fs.readFileSync(filename, 'utf8'),
                        {
                            allowImportExportEverywhere: true,
                            plugins: [
                                'typescript'
                            ],
                            ranges: false,
                        }
                    );

                    result = getType(
                        path.$ast,
                        node,
                        {
                            directory: dirname(filename),
                        }
                    );
                }
                catch { }

                path.stop();

                break;
            }
        },
        TSInterfaceDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
        TSTypeAliasDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
    });

    return result || node;
};

export const extract = (config) => {

    const next = (context) => {

        if (context.skip) return;

        let
            additions = [],
            children,
            component,
            render;

        traverse(context.ast, {
            ClassDeclaration: {
                exit(path) {

                    const { node } = path;

                    component = node;

                    children = node.body.body;

                    path.skip();
                }
            },
            ClassMethod(path) {

                const { node } = path;

                if (node.key.name != CONSTANTS.TOKEN_METHOD_RENDER) return;

                render = t.file(
                    t.program([
                        t.classDeclaration(
                            t.identifier('Test'),
                            undefined,
                            t.classBody([
                                node
                            ])
                        )
                    ])
                );

                path.remove();
            },
            Decorator(path) {

                const { node } = path;

                const { name } = node.expression.callee;

                if (name != CONSTANTS.TOKEN_DECORATOR_COMPONENT && name != CONSTANTS.TOKEN_DECORATOR_METHOD) return;

                additions.push(path);
            }
        });

        context.directory = path.dirname(context.filename);

        context.name = component.id.name;

        context.key = Case.kebab(context.name);

        context.tag = `${config.prefix}-${context.key}`;

        context.tags = getTags(component);

        context.title = Case.capital(context.key);

        context.attributes = children
            .filter((property) => hasDecorator(property, CONSTANTS.TOKEN_DECORATOR_ATTRIBUTES))
            .map((property) => ({
                name: property.key.name
            }));

        context.properties = children
            .filter((property) => hasDecorator(property, CONSTANTS.TOKEN_DECORATOR_PROPERTY))
            .map((property) => {

                const tags = getTags(property);

                const name = property.key.name;

                const attribute = Case.kebab(name);

                const initializer = getInitializer(property);

                const reflect = (() => {

                    try {
                        for (const decorator of property.decorators) {
                            for (const argument of decorator.expression.arguments) {
                                for (const property of argument.properties) {
                                    if (property.key.name != 'reflect') continue;
                                    if (property.value.type != 'BooleanLiteral') continue;
                                    if (!property.value.value) continue;
                                    return true;
                                }
                            }
                        }
                    }
                    catch { }

                    return false;
                })();

                const required = !property.optional;

                // TODO
                const type = getType(
                    context.ast,
                    property.typeAnnotation.typeAnnotation,
                    {
                        directory: context.directory,
                    }
                ).type;

                const experimental = tags.some((tag) => tag.key == 'experimental');

                const description = (tags.find((tag) => !tag.key) || {}).value;

                // TODO
                const values = [
                    // { type: 'number' },
                    // { type: 'number[]' },
                    // { type: 'boolean' },
                    // { type: 'string' },
                    // { type: 'string', value: '1' },
                    // { type: 'string', value: 'crop', description: 'Creates a new viewpor' },
                    // { type: 'CropperValue' },
                    // { type: 'HTMLElement' },
                    // {
                    //     type: "boolean",
                    //     description: {
                    //         false: 'Unable to zoom the image.',
                    //         true: 'Enables to zoom the image by touching and wheeling mouse.'
                    //     }
                    // }
                ];

                const model = tags.some((tag) => tag.key == 'model');

                return {
                    name,
                    attribute,
                    initializer,
                    reflect,
                    required,
                    type,
                    experimental,
                    description,
                    values,
                    model,
                }
            });

        context.events = children
            .filter((event) => hasDecorator(event, CONSTANTS.TOKEN_DECORATOR_EVENT))
            .map((event) => {

                const tags = getTags(event);

                const name = event.key.name;

                const cancelable = (() => {

                    try {
                        for (const decorator of event.decorators) {
                            for (const argument of decorator.expression.arguments) {
                                for (const property of argument.properties) {
                                    if (property.key.name != 'cancelable') continue;
                                    if (property.value.type != 'BooleanLiteral') continue;
                                    if (!property.value.value) continue;
                                    return true;
                                }
                            }
                        }
                    }
                    catch { }

                    return false;
                })();

                // TODO
                const detail = 'void';

                const experimental = tags.some((tag) => tag.key == 'experimental');

                const description = (tags.find((tag) => !tag.key) || {}).value;

                const model = tags.some((tag) => tag.key == 'model');

                return {
                    name,
                    cancelable,
                    detail,
                    experimental,
                    description,
                    model,
                }
            });

        context.slots = children
            .filter((slot) => hasDecorator(slot, CONSTANTS.TOKEN_DECORATOR_SLOTS))
            .map((slot) => ({
                name: slot.key.name
            }));

        context.states = children
            .filter((state) => hasDecorator(state, CONSTANTS.TOKEN_DECORATOR_STATE))
            .map((state) => {

                const name = state.key.name;

                const initializer = getInitializer(state);

                // TODO
                const type = getType(
                    context.ast,
                    state.typeAnnotation.typeAnnotation,
                    {
                        directory: context.directory,
                    }
                ).type;

                return {
                    name,
                    initializer,
                    type,
                }
            });

        context.methods = children
            .filter((method) => hasDecorator(method, CONSTANTS.TOKEN_DECORATOR_METHOD))
            .map((method) => {

                const tags = getTags(method);

                const name = method.key.name;

                const experimental = tags.some((tag) => tag.key == 'experimental');

                // TODO
                const type = 'Promise<void>';

                // TODO
                const signature = 'move(offsetX?: number, offsetY?: number) => Promise<void>';

                const description = (tags.find((tag) => !tag.key) || {}).value;

                // TODO
                const parameters = [
                    // {
                    //     "name": "offsetX",
                    //     "description": "Moving size (px) in the `horizontal` direction. Use `null` to ignore this."
                    // },
                    // {
                    //     "name": "offsetY",
                    //     "description": "Moving size (px) in the `vertical` direction. Use `null` to ignore this."
                    // }
                ];

                return {
                    name,
                    experimental,
                    type,
                    signature,
                    description,
                    parameters,
                }
            });

        context.hasMount = children
            .some((method) => method.key.name === CONSTANTS.TOKEN_LIFECYCLE_MOUNT);

        context.hasUnmount = children
            .some((method) => method.key.name === CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT);

        additions.forEach((path) => path.remove());

        context.script = generator(context.ast, {
            comments: false,
            decoratorsBeforeExport: true,
        }).code;

        // TODO
        context.render = render;
        context.stylePath = path.join(context.directory, `${context.key}.scss`);
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}