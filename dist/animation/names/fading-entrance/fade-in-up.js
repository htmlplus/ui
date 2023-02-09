import { register } from '../register.js';

register('fade-in-up', [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 100%, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
]);
