import { register } from '../register.js';

register('bounce-out', [
  { offset: 0.2, transform: 'scale3d(0.9, 0.9, 0.9)' },
  { offset: 0.5, opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 0.55, opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
  { offset: 1, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }
]);

// TODO
// animation-duration: calc(var(--plus-transition-duration) * 0.75);
