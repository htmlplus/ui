import { register } from '../register.js';

register('slide-out-right', [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(100%, 0, 0)' }
]);
