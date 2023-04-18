import { setConfig } from '@htmlplus/element';

export const register = (name, nodes) => {
  setConfig('PLUS', {
    asset: {
      symbol: {
        [name]: nodes
      }
    }
  });
};
