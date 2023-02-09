import { register } from '../register.js';

register('light-speed-out-right', [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0' }
]);

// TODO
// animation-timing-function: ease-in;
