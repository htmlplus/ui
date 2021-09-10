export function Bind() {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    target;

    if (!descriptor || (typeof descriptor.value !== 'function')) {
      throw new TypeError(`Only methods can be decorated with @bind. <${propertyKey}> is not a method!`);
    }

    return {
      configurable: true,
      get(this) {

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