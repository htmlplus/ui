export const toKebabCase = (input: string) => {

    if (!input) return input;

    return input.replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, '-')
        .toLowerCase();

    // TODO
    // return input
    //     .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    //     .map(x => x.toLowerCase())
    //     .join('-');
}