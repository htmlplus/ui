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

export const extract = (context) => {

    const { config, id, ast } = context;

    let
        additions = [],
        children,
        component,
        render;

    traverse(ast, {
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

    const directory = path.dirname(id);

    const name = component.id.name;

    const key = Case.kebab(name);

    const tag = `${config.prefix}-${key}`;

    const title = Case.capital(key);

    // TODO
    const tags = [];

    const properties = children
        .filter((property) => hasDecorator(property, CONSTANTS.TOKEN_DECORATOR_PROPERTY))
        .map((property) => {

            const name = property.key.name;

            const attribute = Case.kebab(name);

            const initializer = getInitializer(property);

            const reflect = false; // TODO

            const required = !property.optional;

            const type = getType(property);

            const description = getDescription(property);

            const values = []; // TODO

            const tags = [];

            return {
                name,
                attribute,
                initializer,
                reflect,
                required,
                type,
                description,
                values,
                tags,
            }
        });

    const events = children
        .filter((event) => hasDecorator(event, CONSTANTS.TOKEN_DECORATOR_EVENT))
        .map((event) => {

            const name = event.key.name;

            const cancelable = false; // TODO

            const detail = 'void'; // TODO

            const description = getDescription(event);

            const tags = [];

            return {
                name,
                cancelable,
                detail,
                description,
                tags,
            }
        });

    const host = children
        .filter((property) => hasDecorator(property, CONSTANTS.TOKEN_DECORATOR_HOST))
        .map((property) => ({
            name: property.key.name
        }))
        .pop();

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

            const name = method.key.name;

            const type = 'Promise<void>'; // TODO

            const signature = 'browse() => Promise<void>'; // TODO

            const description = getDescription(method);

            const parameters = []; // TODO

            const tags = [];

            return {
                name,
                type,
                signature,
                description,
                parameters,
                tags,
            }
        });

    const hasMount = children
        .some((method) => method.key.name === CONSTANTS.TOKEN_LIFECYCLE_MOUNT);

    const hasUnmount = children
        .some((method) => method.key.name === CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT);

    additions.forEach((path) => path.remove());

    const script = generator(ast, {
        comments: false,
        decoratorsBeforeExport: true,
    }).code;

    context.tags = tags;
    context.directory = directory;
    context.component = component;
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
    context.host = host;

    // TODO
    context.script = script;
    context.render = render;
}