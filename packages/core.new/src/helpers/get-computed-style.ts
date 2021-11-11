export const getComputedStyle = (element, property?): any => {

    const fn = window.getComputedStyle;

    if (!property) return fn(element);

    return fn(element).getPropertyValue(property);
}