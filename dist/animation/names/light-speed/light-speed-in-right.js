import { register } from '../register.js';

register('light-speed-in-right', [
  { offset: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0' },
  { offset: 0.6, transform: 'skewX(20deg)', opacity: '1' },
  { offset: 0.8, transform: 'skewX(-5deg)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
]);

// TODO
// animation-timing-function: ease-out;
