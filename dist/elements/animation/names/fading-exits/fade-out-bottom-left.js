import { register } from '../register.js';

register('fade-out-bottom-left', [
  { offset: 0, opacity: '1', transform: 'translate3d(0, 0, 0)' },
  { offset: 1, opacity: '0', transform: 'translate3d(-100%, 100%, 0)' }
]);
