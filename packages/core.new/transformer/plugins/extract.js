import babelGenerator from '@babel/generator';
import { parse } from '@babel/parser';
import babelTraverse from '@babel/traverse';
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

// TODO
// components\grid-item\grid-item.types.ts
// components\portal\portal.tsx
const printType = (ast) => {

    if (!ast) return ast;

    let result = {};

    switch (ast.type) {

        case 'BooleanLiteral':
        case 'NumericLiteral':
        case 'StringLiteral': {

            result.key = ast.value;

            result.type = ast.type.replace('Literal', '').toLowerCase();

            break;
        }

        case 'TSBooleanKeyword':
        case 'TSNumberKeyword':
        case 'TSStringKeyword': {

            const type = ast
                .type
                .replace('TS', '')
                .replace('Keyword', '')
                .toLowerCase();

            result.key = type;

            result.type = type;

            break;
        }

        case 'TSAnyKeyword': {

            result.type = 'any';

            break;
        }

        case 'TSArrayType': {

            const type = generator(ast.elementType).code + '[]';

            result.key = type;

            result.type = type;

            break;
        }

        case 'TSInterfaceDeclaration': {

            result.type = ast.id.name;

            result.members = ast
                .body
                .body
                .map((body) => printType(body));

            break;
        }

        case 'TSLiteralType': {

            result = printType(ast.literal)

            break;
        }

        case 'TSPropertySignature': {

            const { typeAnnotation } = ast;

            result.key = ast.key.name;

            if (typeAnnotation && typeAnnotation.typeAnnotation)
                result.type = printType(ast.typeAnnotation.typeAnnotation).type;

            break;
        }

        case 'TSTypeAliasDeclaration': {

            result = printType(ast.typeAnnotation);

            break;
        }

        case 'TSTypeReference': {

            result.key = ast.typeName.name;

            result.type = ast.typeName.name;

            break;
        }

        case 'TSUnionType': {

            result.type = generator(ast).code;

            result.members = ast.types.map((type) => printType(type));

            break;
        }
    }

    return result;
}

export const extract = (config) => {

    const next = (context) => {

        if (context.skip) return;

        let
            additions = [],
            children,
            component;

        traverse(context.ast, {
            ClassDeclaration: {
                exit(path) {

                    const { node } = path;

                    component = node;

                    children = node.body.body;

                    path.skip();
                }
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
                const { type, members } = (() => {

                    const ast = getType(
                        context.ast,
                        property.typeAnnotation.typeAnnotation,
                        {
                            directory: context.directory,
                        }
                    )

                    return printType(ast);
                })();

                const experimental = tags.some((tag) => tag.key == 'experimental');

                const description = (tags.find((tag) => !tag.key) || {}).value;

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
                    members,
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
                const detail = (() => {
                    try {
                        return printType(getType(
                            context.ast,
                            event.typeAnnotation.typeAnnotation.typeParameters.params[0],
                            {
                                directory: context.directory,
                            }
                        ))
                    } catch { }
                })()

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

                return {
                    name,
                    initializer,
                }
            });

        context.methods = children
            .filter((method) => hasDecorator(method, CONSTANTS.TOKEN_DECORATOR_METHOD))
            .map((method) => {

                const tags = getTags(method);

                const name = method.key.name;

                const experimental = tags.some((tag) => tag.key == 'experimental');

                // TODO
                // const params = printType(getType(
                //     context.ast,
                //     method.params,
                //     {
                //         directory: context.directory,
                //     }
                // ));

                // console.log(111, params)

                // TODO: returnType
                const type = (() => {
                    try {
                        return printType(getType(
                            context.ast,
                            method.returnType.typeAnnotation,
                            {
                                directory: context.directory,
                            }
                        ));
                    } catch { }
                })();

                // TODO
                const signature = `${method.key.name}(${''}) => ${type}`;

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

        // TODO
        context.stylePath = path.join(context.directory, `${context.key}.scss`);
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}