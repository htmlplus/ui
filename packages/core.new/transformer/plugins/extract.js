import babelGenerator from '@babel/generator';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import path from 'path';
import * as CONSTANTS from '../configs/constants.js';

// TODO
const generator = babelGenerator.default || babelGenerator;
const traverse = babelTraverse.default || babelTraverse;

const hasDecorator = (node, name) => {

    if (!node.decorators) return;

    return node.decorators.some((decorator) => decorator.expression.callee.name == name);
}

const getDescription = (node) => {
    try {
        return node.leadingComments[0].value.trim();
    }
    catch { }
}

const getInitializer = (node) => {

    const value = node.value;

    if (!value) return;

    const extra = value.extra || {};

    return extra.raw || value.value;
}

const getType = (node) => {
    try {
        // TODO
        return node.typeAnnotation.typeAnnotation.type
    }
    catch { }
}

const getTags = (node) => {

    const tags = [];

    const lines = [];

    const comments = node
        .leadingComments
        .map((comment) => comment.value)
        .join('\r\n')
        .split('\r\n');

    for (const comment of comments) {

        let line = comment.trimLeft();

        if (line.startsWith('*'))
            line = line.slice(1);

        if (!line) continue;

        const isTag = line.trim().startsWith('@');

        if (isTag || !lines.length)
            lines.push(line);
        else
            lines[lines.length - 1] += line;
    }

    for (const line of lines) {

        let value = line.trim();

        if (!value.startsWith('@')) {

            tags.push({ value });

            continue;
        }

        const sections = value.split(' ');

        const key = sections[0].slice(1);

        value = sections.slice(1).join(' ').trim();

        tags.push({ key, value });
    }

    return tags;
}

export const extract = (context) => {

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

    const directory = path.dirname(context.filename);

    const name = component.id.name;

    const key = Case.kebab(name);

    const tag = `${context.config.prefix}-${key}`;

    const tags = getTags(component);

    const title = Case.capital(key);

    const attributes = children
        .filter((property) => hasDecorator(property, CONSTANTS.TOKEN_DECORATOR_ATTRIBUTES))
        .map((property) => {

            const name = property.key.name;

            return {
                name,
            }
        });

    const properties = children
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

            const type = getType(property);

            const experimental = tags.some((tag) => tag.key == 'experimental');

            const description = (tags.find((tag) => !tag.key) || {}).value;

            // TODO
            const values = [];

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

    const events = children
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

    const slots = children
        .filter((slot) => hasDecorator(slot, CONSTANTS.TOKEN_DECORATOR_SLOTS))
        .map((slot) => ({
            name: slot.key.name
        }));

    const states = children
        .filter((state) => hasDecorator(state, CONSTANTS.TOKEN_DECORATOR_STATE))
        .map((state) => {

            const name = state.key.name;

            const initializer = getInitializer(state);

            const type = getType(state);

            return {
                name,
                initializer,
                type,
            }
        });

    const methods = children
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

    const hasMount = children
        .some((method) => method.key.name === CONSTANTS.TOKEN_LIFECYCLE_MOUNT);

    const hasUnmount = children
        .some((method) => method.key.name === CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT);

    additions.forEach((path) => path.remove());

    const script = generator(context.ast, {
        comments: false,
        decoratorsBeforeExport: true,
    }).code;

    context.attributes = attributes;
    context.directory = directory;
    context.name = name;
    context.key = key;
    context.tag = tag;
    context.title = title;
    context.events = events;
    context.methods = methods;
    context.properties = properties;
    context.slots = slots;
    context.states = states;
    context.hasMount = hasMount;
    context.hasUnmount = hasUnmount;
    context.tags = tags;
    context.script = script;

    // TODO
    context.render = render;
    context.stylePath = path.join(directory, `${key}.scss`);
}