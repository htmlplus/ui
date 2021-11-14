export const getInitializer = (node) => {

    const value = node.value;

    if (!value) return;

    const extra = value.extra || {};

    return extra.raw || value.value;
}