import { setConfig } from '@htmlplus/element';

export const register = (name, nodes) => {
  setConfig({
    asset: {
      symbol: {
        [name]: nodes
      }
    }
  });
};
