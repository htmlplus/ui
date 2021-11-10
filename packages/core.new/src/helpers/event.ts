export const on = (target, event, handler, options?) => {

    if (!target) return;

    return target.addEventListener(event, handler, options);
}

export const off = (target, event, handler, options?) => {

    if (!target) return;

    return target.removeEventListener(event, handler, options);
}