import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
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
export declare class PlusCarousel extends PlusCore {
    /**
     * Align the slides relative to the carousel viewport.
     */
    align: 'start' | 'center' | 'end';
    /**
     * Enables the height of the carousel container to be adjusted to match the tallest slide in view.
     * This element provides a built-in implementation of Embla's `Auto Height` plugin,
     * so there's no need to include the original plugin manually.
     */
    autoHeight: boolean;
    /**
     * Choose scroll axis between `x` and `y`.
     */
    axis: 'x' | 'y';
    /**
     * Enables automatic class injection for styling based on carousel state.
     * This element provides a built-in implementation of Embla's `Class Names` plugin,
     * so there's no need to include the original plugin manually.
     */
    classes: boolean;
    /**
     * Clear leading and trailing empty space that causes excessive scrolling.
     * Use `trimSnaps` to only use snap points that trigger scrolling or `keepSnaps` to keep them.
     *
     * **Note**: When this is active, it will **override alignments** applied by
     * the **align** property for enough slides at the **start** and the **end** of
     * the carousel, in order to **cover** the **leading** and **trailing space**.
     */
    containScroll: 'off' | 'keepSnaps' | 'trimSnaps';
    /**
     * Enables scrolling the carousel using mouse and touch interactions.
     *
     * @value free - Allows momentum based scrolling without snapping,
     *               where the scroll duration depends on the drag gesture’s intensity.
     * @value snap - Allows the carousel to snap to scroll positions when dragged.
     */
    draggable?: 'free' | 'snap';
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
    dragThreshold: number;
    /**
     * Set scroll duration when triggered by any of the API methods.
     * Higher numbers enables slower scrolling.
     * Drag interactions are not affected because duration is then determined by the drag force.
     *
     * **Note**: Duration is **not** in milliseconds because Embla uses an attraction physics simulation when scrolling instead of easings.
     * Only values between `20-60` are recommended.
     */
    duration: number;
    /**
     * Enables automatic focus event watching on slides.
     * When enabled, fires a slideFocus event and scrolls to the focused slide.
     */
    focusable: boolean;
    /**
     * This is the Intersection Observer
     * [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer)
     * option that will be applied to all slides.
     */
    inViewThreshold: number;
    /**
     * Enables infinite looping by translating slides to create a seamless loop.
     * Automatically disables if slide content is insufficient to prevent glitches.
     */
    loop: boolean;
    /**
     * Pass Embla [plugins](https://www.embla-carousel.com/plugins) to extend carousel functionality.
     */
    plugins?: EmblaPluginType[];
    /**
     * Matches the current slide on another carousel using its id.
     */
    mirror: string;
    /**
     * Specifies how the carousel should be mirrored onto another carousel.
     *
     * @value sync-jump     - Instantly moves the target carousel to match the current slide.
     * @value sync-smooth   - Smoothly scrolls the target carousel to match the current slide.
     * @value click-inherit - Instantly or smoothly jumps the target carousel when a slide is clicked,
     * 													based on the source slide's clickable property configuration.
     * @value click-jump    - Instantly jumps the target carousel when a slide is clicked.
     * @value click-smooth  - Smoothly scrolls the target carousel when a slide is clicked.
     */
    mirrorType?: 'sync-jump' | 'sync-smooth' | 'click-inherit' | 'click-jump' | 'click-smooth';
    /**
     * Watches the **container** and **slides** for size changes and runs reInit when any size has changed.
     */
    resizable: boolean;
    /**
     * Group slides together. Drag interactions, dot navigation, and previous/next buttons
     * are mapped to group slides into the given number, which has to be an integer.
     * Set it to `auto` if you want to group slides automatically.
     */
    slidesToScroll?: 'auto' | number;
    /**
     * Set the initial scroll snap to the given number.
     * First snap index starts at 0.
     * Please note that this is not necessarily equal to the number of
     * slides when used together with the `slidesToScroll` property.
     */
    startIndex: number;
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
     * The Embla carousel API.
     */
    get api(): EmblaCarouselType | undefined;
    /**
     * TODO: Indicates whether the carousel has been successfully initialized.
     */
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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
    state: Context;
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
    watcher(_next: unknown, _prev: unknown, name: string): void;
    initialize(): void;
    terminate(): void;
    register($element: HTMLElement): void;
    unregister($element: HTMLElement): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselAttributesMapper = {
  'autoHeight': 'auto-height';
  'containScroll': 'contain-scroll';
  'dragThreshold': 'drag-threshold';
  'inViewThreshold': 'in-view-threshold';
  'mirrorType': 'mirror-type';
  'slidesToScroll': 'slides-to-scroll';
  'startIndex': 'start-index';
  'tweenFactorBase': 'tween-factor-base';
};
export type PlusCarouselOverridableKeys = 'preset';
export interface PlusCarouselDisables {}
export interface PlusCarouselOverrides {}
export type PlusCarouselAttributes = Rename<PlusCarouselProperties, PlusCarouselAttributesMapper>;
export type PlusCarouselAttributesOverridden = Rename<PlusCarouselPropertiesOverridden, PlusCarouselAttributesMapper>;
export type PlusCarouselAttributesBase = Rename<PlusCarouselPropertiesBase, PlusCarouselAttributesMapper>;
export type PlusCarouselEvents = Filter<PlusCarouselEventsBase, PlusCarouselDisables>;
export type PlusCarouselEventsBase = ToEventHandlers<Pick<PlusCarousel, PlusCarouselEventsKeys>>;
export type PlusCarouselEventsKeys = 'plusDestroy' | 'plusInit' | 'plusPointerDown' | 'plusPointerUp' | 'plusReInit' | 'plusResize' | 'plusScroll' | 'plusSelect' | 'plusSettle' | 'plusSlideFocus' | 'plusSlideFocusStart' | 'plusSlidesChanged' | 'plusSlidesInView';
export type PlusCarouselEventsJSX = ToJSXEvent<PlusCarouselEvents>;
export type PlusCarouselEventsBaseJSX = ToJSXEvent<PlusCarouselEventsBase>;
export type PlusCarouselMethods = Filter<PlusCarouselMethodsBase, PlusCarouselDisables>;
export type PlusCarouselMethodsBase = Pick<PlusCarousel, PlusCarouselMethodsKeys>;
export type PlusCarouselMethodsKeys = 'canScrollNext' | 'canScrollPrevious' | 'previousScrollSnap' | 'scrollNext' | 'scrollPrevious' | 'scrollProgress' | 'scrollSnapList' | 'scrollToIndex' | 'selectedScrollSnap' | 'slideNodes' | 'slidesInView' | 'slidesNotInView';
export type PlusCarouselProperties = Filter<PlusCarouselPropertiesOverridden, PlusCarouselDisables>;
export type PlusCarouselPropertiesOverridden = Override<PlusCarouselPropertiesBase, PlusCarouselOverrides, PlusCarouselOverridableKeys>;
export type PlusCarouselPropertiesBase = Pick<PlusCarousel, PlusCarouselPropertiesKeys>;
export type PlusCarouselPropertiesKeys = 'align' | 'autoHeight' | 'axis' | 'classes' | 'containScroll' | 'draggable' | 'dragThreshold' | 'duration' | 'focusable' | 'inViewThreshold' | 'loop' | 'plugins' | 'mirror' | 'mirrorType' | 'resizable' | 'slidesToScroll' | 'startIndex' | 'tweenFactorBase' | 'api' | 'overrides' | 'preset';
export type PlusCarouselElement = globalThis.HTMLPlusCarouselElement;
export type PlusCarouselJSX = PlusCarouselAttributes & PlusCarouselEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel": PlusCarouselJSX;
  }
}
declare global {
  interface HTMLPlusCarouselElement extends HTMLElement, PlusCarouselMethods, PlusCarouselProperties {}
  var HTMLPlusCarouselElement: {
    prototype: HTMLPlusCarouselElement;
    new (): HTMLPlusCarouselElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel": HTMLPlusCarouselElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel': {
      properties: PlusCarouselPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel": PlusCarouselJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselElement>, HTMLPlusCarouselElement>, keyof PlusCarouselJSX>;
    }
  }
}