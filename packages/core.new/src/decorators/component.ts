export function Component() {
    return function (constructor: Function) {
        constructor;
    }
}