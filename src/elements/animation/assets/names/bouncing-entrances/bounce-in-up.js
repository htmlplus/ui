import { register } from '../register.js';

register('bounce-in-up', [
  { offset: 0, opacity: '0', transform: 'translate3d(0, 3000px, 0) scaleY(5)' },
  { offset: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.6, opacity: '1', transform: 'translate3d(0, -20px, 0) scaleY(0.9)' },
  { offset: 0.6, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.75, transform: 'translate3d(0, 10px, 0) scaleY(0.95)' },
  { offset: 0.75, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 0.9, transform: 'translate3d(0, -5px, 0) scaleY(0.985)' },
  { offset: 0.9, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' },
  { offset: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }
]);
