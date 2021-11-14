export function Bind() {

    return function (target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {

        if (!descriptor || (typeof descriptor.value !== 'function'))
            throw new TypeError(`Only methods can be decorated with @bind. <${String(propertyKey)}> is not a method!`);

        return {
            configurable: true,
            get() {

                const bound = descriptor.value!.bind(this);

                Object.defineProperty(
                    this,
                    propertyKey,
                    {
                        value: bound,
                        configurable: true,
                        writable: true
                    }
                )

                return bound;
            }
        }
    }
}