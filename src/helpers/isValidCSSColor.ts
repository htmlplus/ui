export const isValidCSSColor = (input: string) => {
    const option = new Option();
    option.style.color = input;
    return option.style.color !== '';
}