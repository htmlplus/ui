import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { CarouselContext } from './carousel.context';
import { CarouselAlign, CarouselAxis, CarouselContainScroll, CarouselDraggable, CarouselMirrorType, CarouselSlidesToScroll } from './carousel.types';
import { CarouselPluginAutoHeight, CarouselPluginClasses, CarouselPluginMirror, CarouselPluginTween } from './plugins';
/**
 * A carousel element for cycling through elements—like images or text slides.
 *
 * @thirdParty
 * @dependencies embla-carousel
 * @slot default - The default slot.
 *
 * @examples default, loop, duration, start-index, align, draggable-free, draggable-snap, y-axis,
 *           direction, indicators, indicators-clickable, indicators-clickable-jump, indicators-numbers,
 *           indicators-infinity, resizable, variable-widths, thumbnails, auto-height, classes, opacity,
 *           parallax, scale, counter-template, progress, slides-per-view, events, complex
 */
export declare class Carousel extends PlusCore {
    /**
     * Align the slides relative to the carousel viewport.
     */
    align?: CarouselAlign;
    /**
     * Enables the height of the carousel container to be adjusted to match the tallest slide in view.
     * This element provides a built-in implementation of Embla's `Auto Height` plugin,
     * so there's no need to include the original plugin manually.
     */
    autoHeight?: boolean;
    /**
     * Choose scroll axis between `x` and `y`.
     */
    axis?: CarouselAxis;
    /**
     * Enables automatic class injection for styling based on carousel state.
     * This element provides a built-in implementation of Embla's `Class Names` plugin,
     * so there's no need to include the original plugin manually.
     */
    classes?: boolean;
    /**
     * Clear leading and trailing empty space that causes excessive scrolling.
     * Use `trimSnaps` to only use snap points that trigger scrolling or `keepSnaps` to keep them.
     *
     * **Note**: When this is active, it will **override alignments** applied by
     * the **align** property for enough slides at the **start** and the **end** of
     * the carousel, in order to **cover** the **leading** and **trailing space**.
     */
    containScroll?: CarouselContainScroll;
    /**
     * Enables scrolling the carousel using mouse and touch interactions.
     */
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
    dragThreshold?: number;
    /**
     * Set scroll duration when triggered by any of the API methods.
     * Higher numbers enables slower scrolling.
     * Drag interactions are not affected because duration is then determined by the drag force.
     *
     * **Note**: Duration is **not** in milliseconds because Embla uses an attraction physics simulation when scrolling instead of easings.
     * Only values between `20-60` are recommended.
     */
    duration?: number;
    /**
     * Enables automatic focus event watching on slides.
     * When enabled, fires a slideFocus event and scrolls to the focused slide.
     */
    focusable?: boolean;
    /**
     * This is the Intersection Observer
     * [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)
     * option that will be applied to all slides.
     */
    inViewThreshold?: number;
    /**
     * Enables infinite looping by translating slides to create a seamless loop.
     * Automatically disables if slide content is insufficient to prevent glitches.
     */
    loop?: boolean;
    /**
     * Pass Embla [plugins](https://www.embla-carousel.com/plugins) to extend carousel functionality.
     */
    plugins?: EmblaPluginType[];
    /**
     * Matches the current slide on another carousel using its id.
     */
    mirror?: string;
    /**
     * Specifies how the carousel should be mirrored onto another carousel.
     */
    mirrorType?: CarouselMirrorType;
    /**
     * Watches the **container** and **slides** for size changes and runs reInit when any size has changed.
     */
    resizable?: boolean;
    /**
     * Group slides together. Drag interactions, dot navigation, and previous/next buttons
     * are mapped to group slides into the given number, which has to be an integer.
     * Set it to `auto` if you want to group slides automatically.
     */
    slidesToScroll?: CarouselSlidesToScroll;
    /**
     * Set the initial scroll snap to the given number.
     * First snap index starts at 0.
     * Please note that this is not necessarily equal to the number of
     * slides when used together with the `slidesToScroll` property.
     */
    startIndex?: number;
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
    tweenFactorBase?: number;
    /**
     * Provides a visual style variant for the carousel.
     * Can be used to conditionally apply CSS themes or variants.
     */
    variant?: OverridableValue<string>;
    /**
     * The Embla carousel API.
     */
    get api(): EmblaCarouselType | undefined;
    /**
     * TODO: Indicates whether the carousel has been successfully initialized.
     */
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * Runs when the carousel has been destroyed.
     * This only fires once and will be the last event the carousel fires.
     */
    plusDestroy: EventEmitter<void>;
    /**
     * Runs when the carousel mounts for the first time.
     */
    plusInit: EventEmitter<void>;
    /**
     * Runs when the user has a pointer down on the carousel.
     * It's triggered by a `touchstart` or a `mousedown` event.
     */
    plusPointerDown: EventEmitter<void>;
    /**
     * Runs when the user has released the pointer from the carousel.
     * It's triggered by a `touchend` or a `mouseup` event.
     */
    plusPointerUp: EventEmitter<void>;
    /**
     * TODO
     */
    plusReInit: EventEmitter<void>;
    /**
     * Runs when the carousel container or the slide sizes change.
     * It's using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) under the hood.
     */
    plusResize: EventEmitter<void>;
    /**
     * Runs when the carousel is scrolling.
     * It might be a good idea to throttle this if you're doing expensive stuff in your callback function.
     */
    plusScroll: EventEmitter<void>;
    /**
     * Runs when the selected scroll snap changes.
     */
    plusSelect: EventEmitter<void>;
    /**
     * Runs when the carousel has settled after scroll has been triggered.
     */
    plusSettle: EventEmitter<void>;
    /**
     * Runs when a slide receives focus.
     * For example, when a focusable element like a button, link or input receives focus inside a slide.
     */
    plusSlideFocus: EventEmitter<void>;
    /**
     * TODO
     */
    plusSlideFocusStart: EventEmitter<void>;
    /**
     * Runs when slides are added to, or removed from the carousel **container**.
     */
    plusSlidesChanged: EventEmitter<void>;
    /**
     * Runs when any slide has **entered** or **exited** the viewport.
     */
    plusSlidesInView: EventEmitter<void>;
    state: CarouselContext;
    $viewport?: HTMLElement;
    emblaApi?: EmblaCarouselType;
    internalPlugins: {
        autoHeight: CarouselPluginAutoHeight;
        classes: CarouselPluginClasses;
        mirror: CarouselPluginMirror;
        tween: CarouselPluginTween;
    };
    events: EmblaEventType[];
    get options(): EmblaOptionsType;
    /**
     * Check the possibility to scroll to a next snap point.
     * If **loop** property is enabled and the container holds any slides,
     * this will always return `true`.
     */
    canScrollNext(): boolean;
    /**
     * Check the possiblity to scroll to a previous snap point.
     * If **loop** property is enabled and the container holds any slides,
     * this will always return `true`.
     */
    canScrollPrevious(): boolean;
    /**
     * Get the index of the previously selected snap point.
     */
    previousScrollSnap(): number;
    /**
     * TODO: Resets automatic behavior in the carousel.
     */
    /**
     * Scroll to the next snap point if possible.
     * When **loop** property is disabled and the carousel has reached the last snap point,
     * this method won't do anything.
     * Set the **jump** parameter to `true` when you want to go to the next slide instantly.
     */
    scrollNext(jump?: boolean): void;
    /**
     * Scroll to the previous snap point if possible.
     * When **loop** property is disabled and the carousel has reached the first snap point,
     * this method won't do anything.
     * Set the **jump** parameter to `true` when you want to go to the previous slide instantly.
     */
    scrollPrevious(jump?: boolean): void;
    /**
     * Check how far the carousel has scrolled of its scrollable length from 0 - 1.
     * For example, **0.5 equals 50%**.
     * For example, this can be useful when creating a scroll progress bar.
     */
    scrollProgress(): number;
    /**
     * Get an array containing all the snap point positions.
     * Each position represents how far the carousel needs to progress in order to reach this position.
     */
    scrollSnapList(): number[];
    /**
     * Scroll to a snap point by its unique index.
     * If **loop** property is enabled,
     * Embla Carousel will choose the closest way to the target snap point.
     * Set the **jump** parameter to `true` when you want to go to the desired slide instantly.
     */
    scrollToIndex(index: number, jump?: boolean): void;
    /**
     * Get the index of the selected snap point.
     */
    selectedScrollSnap(): number;
    /**
     * Get all the slide nodes inside the container.
     * This method can be useful when you need to manipulate the slide elements dynamically or similar.
     */
    slideNodes(): HTMLElement[];
    /**
     * Get slide indexes **visible** in the carousel viewport.
     * Honors the [inViewThreshold](https://www.embla-carousel.com/api/options/#inviewthreshold) option.
     */
    slidesInView(): number[];
    /**
     * Get slide indexes **not visible** in the carousel viewport.
     * Honors the [inViewThreshold](https://www.embla-carousel.com/api/options/#inviewthreshold) option.
     */
    slidesNotInView(): number[];
    /**
     * TODO: Starts automatic behavior in the carousel.
     */
    /**
     * TODO: Stops automatic behavior in the carousel.
     */
    watcher(_next: any, _prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    register($element: HTMLElement): void;
    unregister($element: HTMLElement): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface CarouselAttributes {
  /**
  * Align the slides relative to the carousel viewport.
  */
  "align"?: CarouselAlign;
  /**
  * Enables the height of the carousel container to be adjusted to match the tallest slide in view.
  * This element provides a built-in implementation of Embla's `Auto Height` plugin,
  * so there's no need to include the original plugin manually.
  */
  "auto-height"?: boolean;
  /**
  * Choose scroll axis between `x` and `y`.
  */
  "axis"?: CarouselAxis;
  /**
  * Enables automatic class injection for styling based on carousel state.
  * This element provides a built-in implementation of Embla's `Class Names` plugin,
  * so there's no need to include the original plugin manually.
  */
  "classes"?: boolean;
  /**
  * Clear leading and trailing empty space that causes excessive scrolling.
  * Use `trimSnaps` to only use snap points that trigger scrolling or `keepSnaps` to keep them.
  *
  * **Note**: When this is active, it will **override alignments** applied by
  * the **align** property for enough slides at the **start** and the **end** of
  * the carousel, in order to **cover** the **leading** and **trailing space**.
  */
  "contain-scroll"?: CarouselContainScroll;
  /**
  * Enables scrolling the carousel using mouse and touch interactions.
  */
  "draggable"?: CarouselDraggable;
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
  "drag-threshold"?: number;
  /**
  * Set scroll duration when triggered by any of the API methods.
  * Higher numbers enables slower scrolling.
  * Drag interactions are not affected because duration is then determined by the drag force.
  *
  * **Note**: Duration is **not** in milliseconds because Embla uses an attraction physics simulation when scrolling instead of easings.
  * Only values between `20-60` are recommended.
  */
  "duration"?: number;
  /**
  * Enables automatic focus event watching on slides.
  * When enabled, fires a slideFocus event and scrolls to the focused slide.
  */
  "focusable"?: boolean;
  /**
  * This is the Intersection Observer
  * [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)
  * option that will be applied to all slides.
  */
  "in-view-threshold"?: number;
  /**
  * Enables infinite looping by translating slides to create a seamless loop.
  * Automatically disables if slide content is insufficient to prevent glitches.
  */
  "loop"?: boolean;
  /**
  * Pass Embla [plugins](https://www.embla-carousel.com/plugins) to extend carousel functionality.
  */
  "plugins"?: EmblaPluginType[];
  /**
  * Matches the current slide on another carousel using its id.
  */
  "mirror"?: string;
  /**
  * Specifies how the carousel should be mirrored onto another carousel.
  */
  "mirror-type"?: CarouselMirrorType;
  /**
  * Watches the **container** and **slides** for size changes and runs reInit when any size has changed.
  */
  "resizable"?: boolean;
  /**
  * Group slides together. Drag interactions, dot navigation, and previous/next buttons
  * are mapped to group slides into the given number, which has to be an integer.
  * Set it to `auto` if you want to group slides automatically.
  */
  "slides-to-scroll"?: CarouselSlidesToScroll;
  /**
  * Set the initial scroll snap to the given number.
  * First snap index starts at 0.
  * Please note that this is not necessarily equal to the number of
  * slides when used together with the `slidesToScroll` property.
  */
  "start-index"?: number;
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
  "tween-factor-base"?: number;
  /**
  * Provides a visual style variant for the carousel.
  * Can be used to conditionally apply CSS themes or variants.
  */
  "variant"?: OverridableValue<string, CarouselVariantOverrides>;
  /**
  * TODO: Indicates whether the carousel has been successfully initialized.
  */
  // @Property()
  // get initialized(): boolean {
  //   return !!this.api;
  // }
  /**
   * TODO
   */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselProperties, "overrides">>;
}
export interface CarouselEvents {
  /**
  * Runs when the carousel has been destroyed.
  * This only fires once and will be the last event the carousel fires.
  */
  onPlusDestroy?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the carousel mounts for the first time.
  */
  onPlusInit?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the user has a pointer down on the carousel.
  * It's triggered by a `touchstart` or a `mousedown` event.
  */
  onPlusPointerDown?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the user has released the pointer from the carousel.
  * It's triggered by a `touchend` or a `mouseup` event.
  */
  onPlusPointerUp?: (event: CustomEvent<void>) => void;
  /**
  * TODO
  */
  onPlusReInit?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the carousel container or the slide sizes change.
  * It's using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) under the hood.
  */
  onPlusResize?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the carousel is scrolling.
  * It might be a good idea to throttle this if you're doing expensive stuff in your callback function.
  */
  onPlusScroll?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the selected scroll snap changes.
  */
  onPlusSelect?: (event: CustomEvent<void>) => void;
  /**
  * Runs when the carousel has settled after scroll has been triggered.
  */
  onPlusSettle?: (event: CustomEvent<void>) => void;
  /**
  * Runs when a slide receives focus.
  * For example, when a focusable element like a button, link or input receives focus inside a slide.
  */
  onPlusSlideFocus?: (event: CustomEvent<void>) => void;
  /**
  * TODO
  */
  onPlusSlideFocusStart?: (event: CustomEvent<void>) => void;
  /**
  * Runs when slides are added to, or removed from the carousel **container**.
  */
  onPlusSlidesChanged?: (event: CustomEvent<void>) => void;
  /**
  * Runs when any slide has **entered** or **exited** the viewport.
  */
  onPlusSlidesInView?: (event: CustomEvent<void>) => void;
}
export interface CarouselMethods {
  /**
  * Check the possibility to scroll to a next snap point.
  * If **loop** property is enabled and the container holds any slides,
  * this will always return `true`.
  */
  canScrollNext(): boolean;
  /**
  * Check the possiblity to scroll to a previous snap point.
  * If **loop** property is enabled and the container holds any slides,
  * this will always return `true`.
  */
  canScrollPrevious(): boolean;
  /**
  * Get the index of the previously selected snap point.
  */
  previousScrollSnap(): number;
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
  scrollNext(jump?: boolean): void;
  /**
  * Scroll to the previous snap point if possible.
  * When **loop** property is disabled and the carousel has reached the first snap point,
  * this method won't do anything.
  * Set the **jump** parameter to `true` when you want to go to the previous slide instantly.
  */
  scrollPrevious(jump?: boolean): void;
  /**
  * Check how far the carousel has scrolled of its scrollable length from 0 - 1.
  * For example, **0.5 equals 50%**.
  * For example, this can be useful when creating a scroll progress bar.
  */
  scrollProgress(): number;
  /**
  * Get an array containing all the snap point positions.
  * Each position represents how far the carousel needs to progress in order to reach this position.
  */
  scrollSnapList(): number[];
  /**
  * Scroll to a snap point by its unique index.
  * If **loop** property is enabled,
  * Embla Carousel will choose the closest way to the target snap point.
  * Set the **jump** parameter to `true` when you want to go to the desired slide instantly.
  */
  scrollToIndex(index: number, jump?: boolean): void;
  /**
  * Get the index of the selected snap point.
  */
  selectedScrollSnap(): number;
  /**
  * Get all the slide nodes inside the container.
  * This method can be useful when you need to manipulate the slide elements dynamically or similar.
  */
  slideNodes(): HTMLElement[];
  /**
  * Get slide indexes **visible** in the carousel viewport.
  * Honors the [inViewThreshold](https://www.embla-carousel.com/api/options/#inviewthreshold) option.
  */
  slidesInView(): number[];
  /**
  * Get slide indexes **not visible** in the carousel viewport.
  * Honors the [inViewThreshold](https://www.embla-carousel.com/api/options/#inviewthreshold) option.
  */
  slidesNotInView(): number[];
}
export interface CarouselProperties {
  /**
  * Align the slides relative to the carousel viewport.
  */
  align?: CarouselAlign;
  /**
  * Enables the height of the carousel container to be adjusted to match the tallest slide in view.
  * This element provides a built-in implementation of Embla's `Auto Height` plugin,
  * so there's no need to include the original plugin manually.
  */
  autoHeight?: boolean;
  /**
  * Choose scroll axis between `x` and `y`.
  */
  axis?: CarouselAxis;
  /**
  * Enables automatic class injection for styling based on carousel state.
  * This element provides a built-in implementation of Embla's `Class Names` plugin,
  * so there's no need to include the original plugin manually.
  */
  classes?: boolean;
  /**
  * Clear leading and trailing empty space that causes excessive scrolling.
  * Use `trimSnaps` to only use snap points that trigger scrolling or `keepSnaps` to keep them.
  *
  * **Note**: When this is active, it will **override alignments** applied by
  * the **align** property for enough slides at the **start** and the **end** of
  * the carousel, in order to **cover** the **leading** and **trailing space**.
  */
  containScroll?: CarouselContainScroll;
  /**
  * Enables scrolling the carousel using mouse and touch interactions.
  */
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
  dragThreshold?: number;
  /**
  * Set scroll duration when triggered by any of the API methods.
  * Higher numbers enables slower scrolling.
  * Drag interactions are not affected because duration is then determined by the drag force.
  *
  * **Note**: Duration is **not** in milliseconds because Embla uses an attraction physics simulation when scrolling instead of easings.
  * Only values between `20-60` are recommended.
  */
  duration?: number;
  /**
  * Enables automatic focus event watching on slides.
  * When enabled, fires a slideFocus event and scrolls to the focused slide.
  */
  focusable?: boolean;
  /**
  * This is the Intersection Observer
  * [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)
  * option that will be applied to all slides.
  */
  inViewThreshold?: number;
  /**
  * Enables infinite looping by translating slides to create a seamless loop.
  * Automatically disables if slide content is insufficient to prevent glitches.
  */
  loop?: boolean;
  /**
  * Pass Embla [plugins](https://www.embla-carousel.com/plugins) to extend carousel functionality.
  */
  plugins?: EmblaPluginType[];
  /**
  * Matches the current slide on another carousel using its id.
  */
  mirror?: string;
  /**
  * Specifies how the carousel should be mirrored onto another carousel.
  */
  mirrorType?: CarouselMirrorType;
  /**
  * Watches the **container** and **slides** for size changes and runs reInit when any size has changed.
  */
  resizable?: boolean;
  /**
  * Group slides together. Drag interactions, dot navigation, and previous/next buttons
  * are mapped to group slides into the given number, which has to be an integer.
  * Set it to `auto` if you want to group slides automatically.
  */
  slidesToScroll?: CarouselSlidesToScroll;
  /**
  * Set the initial scroll snap to the given number.
  * First snap index starts at 0.
  * Please note that this is not necessarily equal to the number of
  * slides when used together with the `slidesToScroll` property.
  */
  startIndex?: number;
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
  tweenFactorBase?: number;
  /**
  * Provides a visual style variant for the carousel.
  * Can be used to conditionally apply CSS themes or variants.
  */
  variant?: OverridableValue<string, CarouselVariantOverrides>;
  /**
  * The Embla carousel API.
  */
  readonly api: EmblaCarouselType | undefined;
  /**
  * TODO: Indicates whether the carousel has been successfully initialized.
  */
  // @Property()
  // get initialized(): boolean {
  //   return !!this.api;
  // }
  /**
   * TODO
   */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselProperties, "overrides">>;
}
export interface CarouselJSX extends CarouselEvents, CarouselProperties {}
declare global {
  interface HTMLPlusCarouselElement extends HTMLElement, CarouselMethods, CarouselProperties {}
  var HTMLPlusCarouselElement: {
    prototype: HTMLPlusCarouselElement;
    new (): HTMLPlusCarouselElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel": HTMLPlusCarouselElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel": CarouselEvents & CarouselAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel": CarouselEvents & CarouselAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type CarouselElement = globalThis.HTMLPlusCarouselElement;
export interface CarouselVariantOverrides {}