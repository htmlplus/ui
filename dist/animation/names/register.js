import { setConfig } from '@htmlplus/element';

export const register = (name, keyframe) => {
  setConfig({
    asset: {
      animation: {
        [name]: keyframe
      }
    }
  });
};
