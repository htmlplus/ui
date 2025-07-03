import {
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Provider,
  State,
  Watch
} from '@htmlplus/element';

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
  EmblaPluginType
} from 'embla-carousel';

import { PlusCore } from '@/core';
import { ExternalDependencyError } from '@/errors';

import { CarouselContext } from './carousel.context';
import {
  CarouselAlign,
  CarouselAxis,
  CarouselContainScroll,
  CarouselDraggable,
  CarouselMirrorType,
  CarouselSlidesToScroll
} from './carousel.types';
import {
  CarouselPluginAutoHeight,
  CarouselPluginClasses,
  CarouselPluginMirror,
  CarouselPluginTween
} from './plugins';

let EmblaCarouselCore: (
  root: HTMLElement,
  userOptions?: EmblaOptionsType,
  userPlugins?: EmblaPluginType[]
) => EmblaCarouselType;

/**
 * @thirdParty
 * @dependencies embla-carousel
 * @slot default - The default slot.
 */
@Element()
export class Carousel extends PlusCore {
  /**
   * Align the slides relative to the carousel viewport.
   */
  @Property()
  align?: CarouselAlign = 'center';

  /**
   * Enables the height of the carousel container to be adjusted to match the tallest slide in view.
   * This element provides a built-in implementation of Embla's `Auto Height` plugin,
   * so there's no need to include the original plugin manually.
   */
  @Property({ reflect: true })
  autoHeight?: boolean;

  /**
   * Choose scroll axis between `x` and `y`.
   */
  @Property({ reflect: true })
  axis?: CarouselAxis = 'x';

  /**
   * Enables automatic class injection for styling based on carousel state.
   * This element provides a built-in implementation of Embla's `Class Names` plugin,
   * so there's no need to include the original plugin manually.
   */
  @Property()
  classes?: boolean;

  /**
   * Clear leading and trailing empty space that causes excessive scrolling.
   * Use `trimSnaps` to only use snap points that trigger scrolling or `keepSnaps` to keep them.
   *
   * **Note**: When this is active, it will **override alignments** applied by
   * the **align** property for enough slides at the **start** and the **end** of
   * the carousel, in order to **cover** the **leading** and **trailing space**.
   */
  @Property()
  containScroll: CarouselContainScroll = 'trimSnaps';

  /**
   * Enables scrolling the carousel using mouse and touch interactions.
   */
  @Property()
  draggable?: CarouselDraggable;

  /**
   * Drag threshold in pixels.
   * This only affects **when** clicks are fired and not.
   * In contrast to other carousel libraries,
   * it will **not affect when dragging** of the carousel **starts**.
   *
   * **Note**: Browsers handle touch events differently than mouse events.
   * Browsers won't fire the click event when a touch event includes an accidental slight swipe gesture.
   * This is why this threshold only works for mouse events.
   */
  @Property()
  dragThreshold?: number = 10;

  /**
   * Set scroll duration when triggered by any of the API methods.
   * Higher numbers enables slower scrolling.
   * Drag interactions are not affected because duration is then determined by the drag force.
   *
   * **Note**: Duration is **not** in milliseconds because Embla uses an attraction physics simulation when scrolling instead of easings.
   * Only values between `20-60` are recommended.
   */
  @Property()
  duration?: number = 25;

  /**
   * Enables automatic focus event watching on slides.
   * When enabled, fires a slideFocus event and scrolls to the focused slide.
   */
  @Property()
  focusable?: boolean;

  /**
   * This is the Intersection Observer
   * [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)
   * option that will be applied to all slides.
   */
  @Property()
  inViewThreshold?: number = 0;

  /**
   * Enables infinite looping by translating slides to create a seamless loop.
   * Automatically disables if slide content is insufficient to prevent glitches.
   */
  @Property({ reflect: true })
  loop?: boolean;

  /**
   * Pass Embla [plugins](https://www.embla-carousel.com/plugins) to extend carousel functionality.
   */
  @Property()
  plugins?: EmblaPluginType[];

  /**
   * Matches the current slide on another carousel using its id.
   */
  @Property()
  mirror?: string;

  /**
   * Specifies how the carousel should be mirrored onto another carousel.
   */
  @Property()
  mirrorType?: CarouselMirrorType = 'sync-smooth';

  /**
   * Watches the **container** and **slides** for size changes and runs reInit when any size has changed.
   */
  @Property()
  resizable?: boolean;

  /**
   * Group slides together. Drag interactions, dot navigation, and previous/next buttons
   * are mapped to group slides into the given number, which has to be an integer.
   * Set it to `auto` if you want to group slides automatically.
   */
  @Property()
  slidesToScroll: CarouselSlidesToScroll = 1;

  /**
   * Set the initial scroll snap to the given number.
   * First snap index starts at 0.
   * Please note that this is not necessarily equal to the number of
   * slides when used together with the `slidesToScroll` property.
   */
  @Property()
  startIndex?: number = 0;

  /**
   * Sets the base multiplier for the `--plus-carousel-factor-*` CSS variables used in visual transitions.
   * This allows you to create dynamic slide effects such as scaling or fading.
   *
   * For example, setting this value enables effects like:
   * - [Scale](https://www.embla-carousel.com/examples/predefined/#scale)
   * - [Opacity](https://www.embla-carousel.com/examples/predefined/#opacity)
   *
   * The value affects how strongly the visual transformation is applied relative to the slide's position in the carousel.
   */
  @Property()
  tweenFactorBase?: number;

  /**
   * Provides a visual style variant for the carousel.
   * Can be used to conditionally apply CSS themes or variants.
   */
  @Property({ reflect: true })
  variant?: string;

  /**
   * The Embla carousel API.
   */
  @Property()
  get api(): EmblaCarouselType | undefined {
    return this.emblaApi;
  }

  /**
   * TODO: Indicates whether the carousel has been successfully initialized.
   */
  // @Property()
  // get initialized(): boolean {
  //   return !!this.api;
  // }

  /**
   * Runs when the carousel has been destroyed.
   * This only fires once and will be the last event the carousel fires.
   */
  @Event()
  plusDestroy!: EventEmitter<void>;

  /**
   * Runs when the carousel mounts for the first time.
   */
  @Event()
  plusInit!: EventEmitter<void>;

  /**
   * Runs when the user has a pointer down on the carousel.
   * It's triggered by a `touchstart` or a `mousedown` event.
   */
  @Event()
  plusPointerDown!: EventEmitter<void>;

  /**
   * Runs when the user has released the pointer from the carousel.
   * It's triggered by a `touchend` or a `mouseup` event.
   */
  @Event()
  plusPointerUp!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event()
  plusReInit!: EventEmitter<void>;

  /**
   * Runs when the carousel container or the slide sizes change.
   * It's using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) under the hood.
   */
  @Event()
  plusResize!: EventEmitter<void>;

  /**
   * Runs when the carousel is scrolling.
   * It might be a good idea to throttle this if you're doing expensive stuff in your callback function.
   */
  @Event()
  plusScroll!: EventEmitter<void>;

  /**
   * Runs when the selected scroll snap changes.
   */
  @Event()
  plusSelect!: EventEmitter<void>;

  /**
   * Runs when the carousel has settled after scroll has been triggered.
   */
  @Event()
  plusSettle!: EventEmitter<void>;

  /**
   * Runs when a slide receives focus.
   * For example, when a focusable element like a button, link or input receives focus inside a slide.
   */
  @Event()
  plusSlideFocus!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event()
  plusSlideFocusStart!: EventEmitter<void>;

  /**
   * Runs when slides are added to, or removed from the carousel **container**.
   */
  @Event()
  plusSlidesChanged!: EventEmitter<void>;

  /**
   * Runs when any slide has **entered** or **exited** the viewport.
   */
  @Event()
  plusSlidesInView!: EventEmitter<void>;

  @State()
  @Provider('carousel')
  state: CarouselContext = {
    api: undefined,
    register: this.register.bind(this),
    unregister: this.unregister.bind(this),
    // TODO
    scrollTo: (index: number, jump?: boolean) => {
      this.api.scrollTo(index, jump);
      this.internalPlugins.mirror.scrollTo(index, jump);
    }
  };

  $viewport?: HTMLElement;

  emblaApi?: EmblaCarouselType;

  internalPlugins = {
    autoHeight: new CarouselPluginAutoHeight(this),
    classes: new CarouselPluginClasses(this),
    mirror: new CarouselPluginMirror(this),
    tween: new CarouselPluginTween(this)
  };

  events: EmblaEventType[] = [
    'destroy',
    'init',
    'pointerDown',
    'pointerUp',
    'reInit',
    'resize',
    // 'scroll',
    'select',
    'settle',
    'slideFocus',
    'slideFocusStart',
    // 'slidesChanged',
    'slidesInView'
  ];

  get options(): EmblaOptionsType {
    return {
      align: this.align,
      axis: this.axis,
      container: this.$viewport.shadowRoot.querySelector('div'),
      containScroll: this.containScroll == 'off' ? false : this.containScroll,
      direction: this.dir,
      dragFree: this.draggable == 'free',
      dragThreshold: this.dragThreshold,
      duration: this.duration,
      inViewThreshold: this.inViewThreshold,
      loop: this.loop,
      slidesToScroll: this.slidesToScroll,
      slides: Array.from(this.$viewport.children) as HTMLElement[],
      skipSnaps: this.draggable == 'free',
      startIndex: this.startIndex,
      watchDrag: !!this.draggable,
      watchFocus: !!this.focusable,
      watchResize: !!this.resizable,
      watchSlides: false
    };
  }

  /**
   * Check the possibility to scroll to a next snap point.
   * If **loop** property is enabled and the container holds any slides,
   * this will always return `true`.
   */
  @Method()
  canScrollNext(): boolean {
    return !!this.api?.canScrollNext();
  }

  /**
   * Check the possiblity to scroll to a previous snap point.
   * If **loop** property is enabled and the container holds any slides,
   * this will always return `true`.
   */
  @Method()
  canScrollPrevious(): boolean {
    return !!this.api?.canScrollPrev();
  }

  /**
   * Get the index of the previously selected snap point.
   */
  @Method()
  previousScrollSnap(): number {
    return this.api?.previousScrollSnap() || 0;
  }

  /**
   * TODO: Resets automatic behavior in the carousel.
   */
  // @Method()
  // reset() {
  //   // this.plugins.auto.reset();
  // }

  /**
   * Scroll to the next snap point if possible.
   * When **loop** property is disabled and the carousel has reached the last snap point,
   * this method won't do anything.
   * Set the **jump** parameter to `true` when you want to go to the next slide instantly.
   */
  @Method()
  scrollNext(jump?: boolean): void {
    this.api?.scrollNext(jump);
  }

  /**
   * Scroll to the previous snap point if possible.
   * When **loop** property is disabled and the carousel has reached the first snap point,
   * this method won't do anything.
   * Set the **jump** parameter to `true` when you want to go to the previous slide instantly.
   */
  @Method()
  scrollPrevious(jump?: boolean): void {
    this.api?.scrollPrev(jump);
  }

  /**
   * Check how far the carousel has scrolled of its scrollable length from 0 - 1.
   * For example, **0.5 equals 50%**.
   * For example, this can be useful when creating a scroll progress bar.
   */
  @Method()
  scrollProgress(): number {
    return this.api?.scrollProgress() || 0;
  }

  /**
   * Get an array containing all the snap point positions.
   * Each position represents how far the carousel needs to progress in order to reach this position.
   */
  @Method()
  scrollSnapList(): number[] {
    return this.api?.scrollSnapList() || [];
  }

  /**
   * Scroll to a snap point by its unique index.
   * If **loop** property is enabled,
   * Embla Carousel will choose the closest way to the target snap point.
   * Set the **jump** parameter to `true` when you want to go to the desired slide instantly.
   */
  @Method()
  scrollToIndex(index: number, jump?: boolean): void {
    this.api?.scrollTo(index, jump);
  }

  /**
   * Get the index of the selected snap point.
   */
  @Method()
  selectedScrollSnap(): number {
    return this.api?.selectedScrollSnap() || 0;
  }

  /**
   * Get all the slide nodes inside the container.
   * This method can be useful when you need to manipulate the slide elements dynamically or similar.
   */
  @Method()
  slideNodes(): HTMLElement[] {
    return this.api?.slideNodes() || [];
  }

  /**
   * Get slide indexes **visible** in the carousel viewport.
   * Honors the [inViewThreshold](https://www.embla-carousel.com/api/options/#inviewthreshold) option.
   */
  @Method()
  slidesInView(): number[] {
    return this.api?.slidesInView() || [];
  }

  /**
   * Get slide indexes **not visible** in the carousel viewport.
   * Honors the [inViewThreshold](https://www.embla-carousel.com/api/options/#inviewthreshold) option.
   */
  @Method()
  slidesNotInView(): number[] {
    return this.api?.slidesNotInView() || [];
  }

  /**
   * TODO: Starts automatic behavior in the carousel.
   */
  // @Method()
  // start() {
  //   // this.plugins.auto.start();
  // }

  /**
   * TODO: Stops automatic behavior in the carousel.
   */
  // @Method()
  // stop() {
  //   // this.plugins.auto.stop();
  // }

  @Watch()
  watcher(next, prev, name) {
    switch (name) {
      case 'autoHeight':
        this.internalPlugins.autoHeight.reinitialize();
        break;
      case 'classes':
        this.internalPlugins.classes.reinitialize();
        break;
      case 'mirrorTo':
      case 'mirrorType':
        this.internalPlugins.mirror.reinitialize();
        break;
      case 'tweenFactorBase':
        this.internalPlugins.tween.reinitialize();
        break;
      default:
        this.api?.reInit(this.options, this.plugins);
        break;
    }
  }

  initialize() {
    if (!EmblaCarouselCore) return;

    if (this.api) return;

    this.emblaApi = EmblaCarouselCore(this.$viewport, this.options, this.plugins);

    this.api
      .on('init', () => {
        Object.values(this.internalPlugins).forEach((plugin) => plugin.initialize());
      })
      .on('destroy', () => {
        Object.values(this.internalPlugins).forEach((plugin) => plugin.terminate());
      });

    // TODO
    this.events.forEach((event: EmblaEventType) => {
      this.api.on(event, () => {
        this['plus' + event.at(0).toUpperCase() + event.slice(1)]();
      });
    });

    this.state = Object.assign({}, this.state, { api: this.api });
  }

  terminate() {
    this.api?.destroy();

    this.$viewport = undefined;

    this.emblaApi = undefined;

    this.state = Object.assign({}, this.state, { api: this.api });
  }

  register($element: HTMLElement) {
    switch ($element.localName.split('-').at(-1)) {
      case 'slide':
        if (!this.api) break;
        this.plusSlidesChanged();
        this.api.reInit(this.options, this.plugins);
        break;
      case 'slides':
        this.api?.destroy();
        this.$viewport = $element;
        this.initialize();
        break;
    }
  }

  unregister($element: HTMLElement) {
    switch ($element.localName.split('-').at(-1)) {
      case 'slide':
        if (!this.api) break;
        this.plusSlidesChanged();
        this.api.reInit(this.options, this.plugins);
        break;
      case 'slides':
        this.terminate();
        break;
    }
  }

  connectedCallback() {
    import('embla-carousel')
      .then((module: any) => {
        EmblaCarouselCore = module.default || module;
        this.initialize();
      })
      .catch((error) => {
        throw new ExternalDependencyError(this.$host, 'embla-carousel', { cause: error });
      });
  }

  disconnectedCallback() {
    this.api?.destroy();
  }

  render() {
    return <slot />;
  }
}
