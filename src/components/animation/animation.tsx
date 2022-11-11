import { Bind, Element, Event, EventEmitter, Method, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { AnimationComposite, AnimationDirection, AnimationFill, AnimationIterationComposite } from './animation.types';
import { ANIMATION_EASINGS } from './animation.constants';

// TODO
import './assets/fading-entrance/fade-in.js';
import './assets/fading-exits/fade-out.js';

/**
 * @slot default - The default slot.
 */
@Element()
export class Animation {
  /**
   * Determines how values are combined between this animation and other, 
   * separate animations that do not specify their own specific composite operation.
   */
  @Property()
  composite?: AnimationComposite = 'replace';

  /**
   * The number of milliseconds to delay the start of the animation.
   */
  @Property()
  delay?: number = 0;

  /**
   * Whether the animation runs forwards (normal), backwards (reverse), 
   * switches direction after each iteration (alternate), or runs 
   * backwards and switches direction after each iteration (alternate-reverse).
   */
  @Property()
  direction?: AnimationDirection = 'normal';

  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   */
  @Property()
  duration?: number = 1000;

  /**
   * The rate of the animation's change over time. 
   * Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", 
   * or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)".
   */
  @Property()
  easing?: string = 'linear';

  /**
   * The number of milliseconds to delay after the end of an animation. 
   * This is primarily of use when sequencing animations based on the end time of another animation.
   */
  @Property()
  endDelay?: number = 0;

  /**
   * Dictates whether the animation's effects should be reflected by the element(s) 
   * prior to playing ("backwards"), retained after the animation has completed 
   * playing ("forwards"), or both.
   */
  @Property()
  fill?: AnimationFill = 'none';

  /**
   * Gets the native instance of `Animation`.
   */
  @Property()
  get instance() {
    return this.animation;
  }

  /**
   * Determines how values build from iteration to iteration in this animation. 
   * Can be set to accumulate or replace.
   */
  @Property()
  iterationComposite?: AnimationIterationComposite = 'replace';

  /**
   * The number of times the animation should repeat. 
   * And can also take a value of Infinity to make it repeat for as long as the element exists.
   */
  @Property()
  iterations?: number = 1;

  /**
   * Describes at what point in the iteration the animation should start. 
   * 0.5 would indicate starting halfway through the first iteration for example, 
   * and with this value set, an animation with 2 iterations would end halfway through 
   * a third iteration.
   */
  @Property()
  iterationStart?: number = 0;

  /**
   * A [keyframes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) 
   * object or null.
   */
  @Property()
  keyframes?: Keyframe[];

  /**
   * Specifies what kind of animation you want to play. 
   * click [here](/component/animation/names) to see the list of available animations.
   */
  @Property()
  name?: string;

  /**
   * Sets the animation's playback rate.
   */
  @Property()
  playbackRate?: number = 1;

  /**
   * Specifies the time that animation will start.
   */
  @Property({ reflect: true })
  run?: boolean;
  
  /**
   * Fires when the [Animation.cancel()](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel) 
   * method is called or when the animation enters the "idle" play state from another state.
   */
  @Event()
  plusCancel!: EventEmitter<void>;

  /**
   * Fires when the animation finishes playing.
   */
  @Event()
  plusFinish!: EventEmitter<void>;

  /**
   * Fires when the animation is removed (i.e., put into an active replace state).
   */
  @Event()
  plusRemove!: EventEmitter<void>;   

  animation?: globalThis.Animation;

  get $host() {
    return Helpers.host(this);
  }

  get options() {
    return {
      composite: this.composite,
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing: ANIMATION_EASINGS[this.easing] ?? this.easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationComposite: this.iterationComposite,
      iterations: this.iterations,
      iterationStart: this.iterationStart,
      playbackRate: this.playbackRate,
    }
  } 
 
  /** 
   * Clears all [keyframeEffects](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect) 
   * caused by this animation and aborts its playback.
   */
  @Method()
  cancel() {
    this.animation?.cancel();
  }

  /**
   * TODO
   */
  @Method()
  commitStyles() { 
    this.animation?.commitStyles();
  }

  /** 
   * Seeks either end of an animation, depending on whether the animation is playing or reversing.
   */
  @Method()
  finish() {
    this.animation?.finish();
  }

  /**
   * TODO
   */
  @Method()
  pause() { 
    this.animation?.pause();
  }

  /**
   * TODO
   */
  @Method()
  persist() { 
    this.animation?.persist();
  }

  /**
   * TODO
   */
  @Method()
  play() {
    this.animation?.play();
  }
 
  /**
   * TODO
   */
  @Method()
  reverse() { 
    this.animation?.reverse();
  }
 
  /**
   * TODO
   */
  @Method()
  updatePlaybackRate(playbackRate: number) { 
    this.animation?.updatePlaybackRate(playbackRate);
  }

  @Watch('run', true)
  watcher() {
    this.run ?  this.play() : this.pause();
  }

  @Bind()
  onCancel() {
    this.run = false;
    this.plusCancel();
  }

  @Bind()
  onFinish() {
    this.run = false;
    this.plusFinish();
  }

  @Bind()
  onRemove() {
    this.run = false;
    this.plusRemove();
  }

  updatedCallback() {
    this.disconnectedCallback();

    const keyframes = this.keyframes ?? window['PLUS_ANIMATION_KEYFRAME']?.[this.name] ?? [];

    this.animation = this.$host.animate(keyframes, this.options);

    this.animation.addEventListener('cancel', this.onCancel);
    this.animation.addEventListener('finish', this.onFinish);
    this.animation.addEventListener('remove', this.onRemove);

    if (this.run) return;

    this.pause();
  }

  disconnectedCallback() { 
    this.animation?.removeEventListener('cancel', this.onCancel);
    this.animation?.removeEventListener('finish', this.onFinish);
    this.animation?.removeEventListener('remove', this.onFinish);
  }

  render() {
    return (
      <slot />
    )
  }
}
