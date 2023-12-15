import { register } from '../register.js';

register('rotate-in', [
  { offset: 0, transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0' },
  { offset: 1, transform: 'translate3d(0, 0, 0)', opacity: '1' }
]);

// TODO
// transform-origin: center;
