import { register } from '../register.js';

register('zoom-out', [
  { offset: 0, opacity: '1' },
  { offset: 0.5, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  { offset: 1, opacity: '0' }
]);
