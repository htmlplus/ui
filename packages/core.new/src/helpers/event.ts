export const on = (target, event, handler, options?) => {
    target.addEventListener(event, handler, options);
}

export const off = (target, event, handler, options?) => {
    target.removeEventListener(event, handler, options);
}