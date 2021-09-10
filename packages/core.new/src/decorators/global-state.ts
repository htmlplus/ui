export function GlobalState() {

  return function (target: Object, propertyKey: string) {

      let state;

      const descriptor = {
          set(input) {

              if (state) return;

              state = input;
          },
          get(this: any) {

              return state;
          },
          enumerable: true,
          configurable: true,
      };

      Object.defineProperty(target, propertyKey, descriptor);
  }
}
