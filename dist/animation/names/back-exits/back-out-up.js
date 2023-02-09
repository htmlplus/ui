import { register } from '../register.js';

register('back-out-up', [
  { offset: 0, transform: 'scale(1)', opacity: '1' },
  { offset: 0.2, transform: 'translateY(0px) scale(0.7)', opacity: '0.7' },
  { offset: 1, transform: 'translateY(-700px) scale(0.7)', opacity: '0.7' }
]);
