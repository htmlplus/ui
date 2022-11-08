import { register } from '../register.js';

register('hinge', [
  { offset: 0, easing: 'ease-in-out' },
  { offset: 0.2, transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' },
  { offset: 0.4, transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', opacity: '1' },
  { offset: 0.6, transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out' },
  { offset: 0.8, transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', opacity: '1' },
  { offset: 1, transform: 'translate3d(0, 700px, 0)', opacity: '0' }
]);

// TODO
// animation-duration: calc(var(--plus-transition-duration) * 2);
// transform-origin: top left;
