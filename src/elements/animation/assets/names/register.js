import { setConfig } from '@htmlplus/element';

export const register = (name, keyframe) => {
  setConfig('$htmlplus')({
    asset: {
      animation: {
        [name]: keyframe
      }
    }
  });
};
