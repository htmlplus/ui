export function GlobalState() {

    return function (target: Object, propertyKey: PropertyKey) {

        let state;

        const descriptor = {
            get() {
                return state;
            },
            set(input) {

                if (state) return;

                state = input;
            }
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}
