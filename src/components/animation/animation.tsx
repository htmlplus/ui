import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Watch,
  getConfig,
  host
} from '@htmlplus/element';

import { ANIMATION_EASINGS } from './animation.constants';
import {
  AnimationComposite,
  AnimationDirection,
  AnimationFill,
  AnimationIterationComposite
} from './animation.types';
// Imports built-in animations.
import './assets/names/fading-entrance/fade-in.js';
import './assets/names/fading-exits/fade-out.js';

/**
 * @stable
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
   * Whether the animation runs forwards (`normal`), backwards (`reverse`),
   * switches direction after each iteration (`alternate`), or runs
   * backwards and switches direction after each iteration (`alternate-reverse`).
   */
  @Property()
  direction?: AnimationDirection = 'normal';

  /**
   * The number of milliseconds each iteration of the animation takes to complete.
   * Keep in mind that your animation will not run if this value is 0.
   */
  @Property()
  duration?: number = 1000;

  /**
   * The rate of the animation's change over time.
   * Accepts the pre-defined values "`linear`", "`ease`", "`ease-in`", "`ease-out`", and "`ease-in-out`",
   * or a custom "`cubic-bezier`" value like "`cubic-bezier(0.42, 0, 0.58, 1)`".
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
   * prior to playing ("`backwards`"), retained after the animation has completed
   * playing ("`forwards`"), or `both`.
   */
  @Property()
  fill?: AnimationFill = 'none';

  /**
   * The [Animation](https://mdn.io/api-animation) object instance.
   */
  @Property()
  instance?: globalThis.Animation;

  /**
   * Determines how values build from iteration to iteration in this animation.
   * Can be set to `accumulate` or `replace`.
   */
  @Property()
  iterationComposite?: AnimationIterationComposite = 'replace';

  /**
   * The number of times the animation should repeat. And can also take a value of
   * [Infinity](https://mdn.io/infinity)
   * to make it repeat for as long as the element exists.
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
   * A [keyframes](https://mdn.io/keyframe-formats)
   * object or `null`.
   */
  @Property()
  keyframes?: Keyframe[];

  /**
   * Specifies what kind of animation will play.
   * The list of available animations is [here](/component/animation/names).
   */
  @Property()
  name?: string;

  /**
   * Sets the animation's playback rate.
   */
  @Property()
  playbackRate?: number = 1;

  /**
   * Starts the animation.
   */
  @Property({ reflect: true })
  run?: boolean;

  /**
   * Fires when the [Animation.cancel()](https://mdn.io/animation-cancel)
   * method is called or when the animation enters the "`idle`" play state from another state.
   */
  @Event()
  plusCancel!: EventEmitter<void>;

  /**
   * Fires when the animation finishes playing.
   */
  @Event()
  plusFinish!: EventEmitter<void>;

  /**
   * Fires when the animation is removed (i.e., put into an `active` replace state).
   */
  @Event()
  plusRemove!: EventEmitter<void>;

  get options() {
    return {
      composite: this.composite,
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing:
        ANIMATION_EASINGS[this.easing] ?? getConfig('asset', 'easing', this.easing) ?? this.easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationComposite: this.iterationComposite,
      iterations: this.iterations,
      iterationStart: this.iterationStart,
      playbackRate: this.playbackRate
    };
  }

  /**
   * Clears all [keyframeEffects](https://mdn.io/keyframe-effect)
   * caused by this animation and aborts its playback.
   */
  @Method()
  cancel() {
    this.instance?.cancel();
  }

  /**
   * Commits the end styling state of an animation to the element being animated, even after that
   * animation has been removed. It will cause the end styling state to be written to the element
   * being animated, in the form of properties inside a `style` attribute.
   */
  @Method()
  commitStyles() {
    this.instance?.commitStyles();
  }

  /**
   * Seeks either end of an animation, depending on whether the animation is playing or reversing.
   */
  @Method()
  finish() {
    this.instance?.finish();
  }

  /**
   * Suspends playing of an animation.
   */
  @Method()
  pause() {
    this.instance?.pause();
  }

  /**
   * Explicitly persists an animation, when it would otherwise be removed due to the browser's
   * [Automatically removing filling animations](https://developer.mozilla.org/en-US/docs/Web/API/Animation#automatically_removing_filling_animations)
   * behavior.
   */
  @Method()
  persist() {
    this.instance?.persist();
  }

  /**
   * Starts or resumes playing of an animation, or begins the animation again if it previously finished.
   */
  @Method()
  play() {
    this.run = true;
    this.instance?.play();
  }

  /**
   * Reverses playback direction, stopping at the start of the animation.
   * If the animation is finished or unplayed, it will play from end to beginning.
   */
  @Method()
  reverse() {
    this.instance?.reverse();
  }

  /**
   * Sets the speed of an animation after first synchronizing its playback position.
   */
  @Method()
  updatePlaybackRate(playbackRate: number) {
    this.instance?.updatePlaybackRate(playbackRate);
  }

  @Watch('run', true)
  watcher() {
    this.run ? this.play() : this.pause();
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

    const keyframes = this.keyframes ?? getConfig('asset', 'animation', this.name) ?? [];

    this.instance = host(this).animate(keyframes, this.options);

    this.instance.addEventListener('cancel', this.onCancel);
    this.instance.addEventListener('finish', this.onFinish);
    this.instance.addEventListener('remove', this.onRemove);

    if (this.run) return;

    this.pause();
  }

  disconnectedCallback() {
    this.instance?.removeEventListener('cancel', this.onCancel);
    this.instance?.removeEventListener('finish', this.onFinish);
    this.instance?.removeEventListener('remove', this.onFinish);
  }

  render() {
    return <slot />;
  }
}
