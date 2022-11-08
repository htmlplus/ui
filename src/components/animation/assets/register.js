export const register = (name, keyframe) => {
  if (typeof window == 'undefined') return;
  window['PLUS_ANIMATION_KEYFRAME'] = window['PLUS_ANIMATION_KEYFRAME'] || {};
  window['PLUS_ANIMATION_KEYFRAME'][name] = keyframe;
};
