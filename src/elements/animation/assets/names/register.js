import { setConfig } from '@htmlplus/element';

export const register = (name, keyframe) => {
  setConfig('PLUS')({
    asset: {
      animation: {
        [name]: keyframe
      }
    }
  });
};
