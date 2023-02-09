import { register } from '../register.js';

register('jack-in-the-box', [
  { 'offset': 0, 'opacity': '0', 'transform': 'scale(0.1) rotate(30deg)', 'transform-origin': 'center bottom' },
  { offset: 0.5, transform: 'rotate(-10deg)' },
  { offset: 0.7, transform: 'rotate(3deg)' },
  { offset: 1, opacity: '1', transform: 'scale(1)' }
]);
