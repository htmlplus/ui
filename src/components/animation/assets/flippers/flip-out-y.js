import { register } from '../register.js';

register('flip-out-y', [
  { offset: 0, transform: 'perspective(400px)' },
  { offset: 0.3, transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: '1' },
  { offset: 1, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0' }
]);

// TODO
// animation-duration: calc(var(--plus-transition-duration) * 0.75);
// backface-visibility: visible !important;
