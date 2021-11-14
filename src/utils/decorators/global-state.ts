export const GlobalState = () => {

  return (instance: {} | any, name: PropertyKey): any => {

    let state;

    const descriptor = {
      set(value) {

        if (state) return;

        state = value;
      },
      get(this: any) {

        return state;
      },
      enumerable: true,
      configurable: true,
    };

    Object.defineProperty(instance, name, descriptor);
  }
}
