import { setConfig } from '@htmlplus/element';

export const register = (name, keyframe) => {
  setConfig('plus', {
    assets: {
      animations: {
        [name]: keyframe
      }
    }
  });
};
