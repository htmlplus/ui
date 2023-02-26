/// <reference types="cypress" />
import { method, property } from '../support/utils';

describe('plus-animation', () => {
  beforeEach(() => {
    cy.init(`<plus-animation></plus-animation>`);
  });

  property('@element', 'composite', ['add', 'accumulate', 'replace'], 'replace', false);
  property('@element', 'delay', Number, 0, false);
  property(
    '@element',
    'direction',
    ['alternate-reverse', 'alternate', 'normal', 'reverse'],
    'normal',
    false
  );
  property('@element', 'duration', Number, 1000, false);
  property(
    '@element',
    'easing',
    [
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out',
      'ease-in-sine',
      'ease-out-sine',
      'ease-in-out-sine',
      'ease-in-quad',
      'ease-out-quad',
      'ease-in-out-quad',
      'ease-in-cubic',
      'ease-out-cubic',
      'ease-in-out-cubic',
      'ease-in-quart',
      'ease-out-quart',
      'ease-in-out-quart',
      'ease-in-quint',
      'ease-out-quint',
      'ease-in-out-quint',
      'ease-in-expo',
      'ease-out-expo',
      'ease-in-out-expo',
      'ease-in-circ',
      'ease-out-circ',
      'ease-in-out-circ',
      'ease-in-back',
      'ease-out-back',
      'ease-in-out-back',
      'linear'
    ],
    'linear',
    false
  );
  property('@element', 'endDelay', Number, 0, false);
  property('@element', 'fill', ['backwards', 'forwards', 'none'], 'none', false);
  // TODO
  // property('@element', 'instance', globalThis.Animation, undefined, false);
  property('@element', 'iterationComposite', ['accumulate', 'replace'], 'replace', false);
  property('@element', 'iterations', Number, 1, false);
  property('@element', 'iterationStart', Number, 0, false);
  property('@element', 'keyframes', Array, undefined, false);
  property('@element', 'name', String, undefined, false);
  property('@element', 'playbackRate', Number, 1, false);
  property('@element', 'run', Boolean, undefined, true);

  method('@element', 'cancel');
  method('@element', 'commitStyles');
  method('@element', 'finish');
  method('@element', 'pause');
  method('@element', 'persist');
  method('@element', 'play');
  method('@element', 'reverse');
  method('@element', 'updatePlaybackRate');
});
