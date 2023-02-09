import { register } from '../register.js';

register('fade-out-right', [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(100%, 0, 0)' }
]);
