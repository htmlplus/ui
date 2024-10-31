import { register } from '../register.js';

register('flip-in-y', [
  { offset: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', easing: 'ease-in', opacity: '0' },
  { offset: 0.4, transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', easing: 'ease-in' },
  { offset: 0.6, transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1' },
  { offset: 0.8, transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
  { offset: 1, transform: 'perspective(400px)' }
]);

// TODO
// backface-visibility: visible !important;
