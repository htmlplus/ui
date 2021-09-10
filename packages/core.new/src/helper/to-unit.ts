export const toUnit = (input: string | number) => {

    if (input == null || input === '') return undefined;

    if (isNaN(+input!)) return String(input);

    return `${Number(input)}px`;
}