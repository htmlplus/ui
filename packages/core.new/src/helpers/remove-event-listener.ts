export const removeEventListener = (target, event, handler, options?) => {

    if (!target) return;

    return target.removeEventListener(event, handler, options);
}