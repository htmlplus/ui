import { register } from '../register.js';

register('heart-beat', [
  { offset: 0, transform: 'scale(1)' },
  { offset: 0.14, transform: 'scale(1.3)' },
  { offset: 0.28, transform: 'scale(1)' },
  { offset: 0.42, transform: 'scale(1.3)' },
  { offset: 0.7, transform: 'scale(1)' }
]);

// TODO
// animation-duration: calc(var(--plus-transition-duration) * 1.3);
// animation-timing-function: ease-in-out;
