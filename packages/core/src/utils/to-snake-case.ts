export const toSnakeCase = (input: string) => {

    if (!input) return input;

    const matches = input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    if (!matches) return input;

    return matches.map(x => x.toLowerCase()).join('_');
}