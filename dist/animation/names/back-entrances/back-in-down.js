import { register } from '../register.js';

register('back-in-down', [
  { offset: 0, transform: 'translateY(-1200px) scale(0.7)', opacity: '0.7' },
  { offset: 0.8, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'scale(1)', opacity: '1' }
]);
