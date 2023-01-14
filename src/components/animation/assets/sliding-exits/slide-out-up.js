import { register } from '../register.js';

register('slide-out-up', [
  { offset: 0, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' }
]);
