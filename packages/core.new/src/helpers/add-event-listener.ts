export const addEventListener = (target, event, handler, options?) => {

    if (!target) return;

    return target.addEventListener(event, handler, options);
}