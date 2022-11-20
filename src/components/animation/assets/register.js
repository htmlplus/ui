import { setConfig } from '@htmlplus/element';

export const register = (name, keyframe) => {
  setConfig({
    component: {
      'plus-animation': {
        asset: {
          name: {
            [name]: keyframe
          }
        }
      }
    }
  });
};
