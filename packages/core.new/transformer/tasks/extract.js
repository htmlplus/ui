import Case from 'case';
import path from 'path';
import * as CONSTANTS from '../constants';

export const extract = (context) => {

    const { config, id, ast } = context;

    const directory = path.dirname(id);

    const component = ast
        .getClasses()
        .find((item) => item.getDecorator(CONSTANTS.TOKEN_DECORATOR_COMPONENT));

    component
        .getDecorator(CONSTANTS.TOKEN_DECORATOR_COMPONENT)
        .remove();

    const name = component.getName();

    const key = Case.kebab(name);

    const tag = `${config.prefix}-${key}`;

    const title = Case.capital(key);

    const tags = [];

    const events = component
        .getProperties()
        .filter((event) => event.getDecorator(CONSTANTS.TOKEN_DECORATOR_EVENT))
        .map((event) => {

            const name = event.getName();

            const cancelable = false; // TODO

            const detail = 'void'; // TODO

            const description = event.getJsDocs()[0].getCommentText(); // TODO

            const tags = [];

            return {
                name,
                cancelable,
                detail,
                description,
                tags,
            }
        })

    const methods = component
        .getMethods()
        .filter((method) => method.getDecorator(CONSTANTS.TOKEN_DECORATOR_METHOD))
        .map((method) => {

            method.getDecorator(CONSTANTS.TOKEN_DECORATOR_METHOD).remove();

            const name = method.getName();

            const type = 'Promise<void>'; // TODO

            const signature = 'browse() => Promise<void>'; // TODO

            const description = method.getJsDocs()[0].getCommentText(); // TODO

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
        })

    const render = component
        .getMethods()
        .find((method) => method.getName() === CONSTANTS.TOKEN_METHOD_RENDER);

    const properties = component
        .getProperties()
        .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_PROPERTY))
        .map((property) => {

            const name = property.getName();

            const attribute = Case.kebab(name);

            const initializer = property.hasInitializer() ? property.getInitializer().getLiteralValue() : undefined;

            const reflect = false; // TODO

            const required = !property.getQuestionTokenNode();

            const type = property.getTypeNode().getText(); // TODO

            const description = property.getJsDocs()[0].getCommentText(); // TODO

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
        })

    const slots = component
        .getProperties()
        .filter((slot) => slot.getDecorator(CONSTANTS.TOKEN_DECORATOR_SLOTS))
        .map((slot) => {

            const name = slot.getName();

            return {
                name
            }
        })

    const states = component
        .getProperties()
        .filter((state) => state.getDecorator(CONSTANTS.TOKEN_DECORATOR_STATE))
        .map((state) => {

            const name = state.getName();

            const initializer = state.hasInitializer() ? state.getInitializer().getLiteralValue() : undefined;

            const type = state.getTypeNode().getText(); // TODO

            return {
                name,
                initializer,
                type,
            }
        })

    const hasMount = component
        .getMethods()
        .some((method) => method.getName() === CONSTANTS.TOKEN_LIFECYCLE_MOUNT);

    const hasUnmount = component
        .getMethods()
        .some((method) => method.getName() === CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT);

    const host = component
        .getProperties()
        .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_HOST))
        .map((property) => {

            const name = property.getName();

            return {
                name
            }
        })
        .pop();

    context.tags = tags;
    context.directory = directory;
    context.component = component;
    context.name = name;
    context.key = key;
    context.tag = tag;
    context.title = title;
    context.events = events;
    context.methods = methods;
    context.render = render;
    context.properties = properties;
    context.slots = slots;
    context.states = states;
    context.hasMount = hasMount;
    context.hasUnmount = hasUnmount;
    context.host = host;
}