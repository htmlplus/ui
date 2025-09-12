import { B as Bind, P as PlusCore, E as ExternalDependencyError, h as html, c as Property, V as Variant, O as Overrides, e as Event, S as State, f as Provider, M as Method, W as Watch, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}global plus-carousel[variant=presentation]{position:relative}global plus-carousel[variant=presentation] plus-carousel-button{position:absolute;top:50%;z-index:1;transform:translateY(-50%)}global plus-carousel[variant=presentation] plus-carousel-button[type=previous]:dir(ltr),global plus-carousel[variant=presentation] plus-carousel-button[type=next]:dir(rtl){left:1rem}global plus-carousel[variant=presentation] plus-carousel-button[type=previous]:dir(rtl),global plus-carousel[variant=presentation] plus-carousel-button[type=next]:dir(ltr){right:1rem}global plus-carousel[variant=presentation] plus-carousel-counter{position:absolute;right:1rem;bottom:1rem;z-index:1}global plus-carousel[variant=presentation] plus-carousel-indicators{position:absolute;left:50%;bottom:1rem;z-index:1;transform:translateX(-50%)}global plus-carousel[variant=presentation] plus-carousel-progress{position:absolute;top:-0.5rem;right:0;left:0;z-index:1;height:4px}global plus-carousel[variant=presentation] plus-carousel-slide{flex-basis:100%;background-color:#f5f5f5;border-radius:.5rem;font-size:2.5rem;font-weight:600;display:flex;align-items:center;justify-content:center;user-select:none;height:12rem}global plus-carousel[variant=presentation][axis=x] plus-carousel-slide{margin-left:.5rem}global plus-carousel[variant=presentation][axis=y] plus-carousel-slide{margin-top:.5rem}global plus-carousel[variant=presentation][axis=y] plus-carousel-slides::part(container){height:12rem}:host{display:block}";
class CarouselPlugin {
  constructor(instance) {
    this.instance = instance;
  }
  get api() {
    return this.instance.api;
  }
  initialize() {
    Object.keys(this.events).forEach((key) => {
      this.api.on(key, this.events[key]);
    });
  }
  terminate() {
    Object.keys(this.events).forEach((key) => {
      this.api.off(key, this.events[key]);
    });
  }
  reinitialize() {
    this.terminate();
    this.initialize();
  }
}
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$4(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$4(target, key, result);
  return result;
};
class CarouselPluginAutoHeight extends CarouselPlugin {
  constructor() {
    super(...arguments);
    this.events = {
      reInit: this.handleEvent,
      select: this.handleEvent,
      slideFocus: this.handleEvent
    };
  }
  get active() {
    return this.instance.autoHeight && this.instance.options.axis === "x";
  }
  initialize() {
    if (!this.active) return;
    super.initialize();
    this.handleEvent();
  }
  terminate() {
    super.terminate();
    const container = this.api.containerNode();
    container.style.height = "";
    if (container.getAttribute("style")) return;
    container.removeAttribute("style");
  }
  handleEvent() {
    const { slideRects, slideRegistry } = this.api.internalEngine();
    const selectedIndexes = slideRegistry[this.api.selectedScrollSnap()];
    if (!selectedIndexes) return;
    const height = selectedIndexes.map((index) => slideRects[index].height).reduce((a, b) => Math.max(a, b), 0);
    this.api.containerNode().style.height = `${height}px`;
  }
}
__decorateClass$4([
  Bind()
], CarouselPluginAutoHeight.prototype, "handleEvent");
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$3(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$3(target, key, result);
  return result;
};
class CarouselPluginClasses extends CarouselPlugin {
  constructor() {
    super(...arguments);
    this.slides = [];
    this.inView = [];
    this.snapped = [];
    this.names = {
      draggable: "draggable",
      dragging: "dragging",
      inView: "in-view",
      snapped: "snapped"
    };
    this.events = {
      reInit: this.handleInit,
      select: this.handleSelect,
      slidesInView: this.handleSlidesInView,
      pointerDown: this.handlePointerDown,
      pointerUp: this.handlePointerUp
    };
  }
  get active() {
    return !!this.instance.classes;
  }
  initialize() {
    if (!this.active) return;
    super.initialize();
    this.handleInit();
    this.handleSelect();
    this.handleSlidesInView();
  }
  terminate() {
    super.terminate();
    this.instance.$host.classList.remove(this.names.draggable);
    this.instance.$host.classList.remove(this.names.dragging);
    this.inView.forEach((index) => {
      this.slides.at(index).classList.remove(this.names.inView);
    });
    this.snapped.forEach((index) => {
      this.slides.at(index).classList.remove(this.names.snapped);
    });
    this.slides = [];
    this.inView = [];
    this.snapped = [];
  }
  handleInit() {
    this.slides = this.api.slideNodes();
    const engine = this.api.internalEngine();
    const draggable = !!engine.options.watchDrag;
    if (draggable) {
      this.instance.$host.classList.add(this.names.draggable);
    } else {
      this.instance.$host.classList.remove(this.names.draggable);
    }
  }
  handlePointerDown() {
    this.instance.$host.classList.add(this.names.dragging);
  }
  handlePointerUp() {
    this.instance.$host.classList.remove(this.names.dragging);
  }
  handleSelect() {
    const prev = this.snapped;
    const next = this.api.internalEngine().slideRegistry[this.api.selectedScrollSnap()];
    next.filter((item) => !prev.includes(item)).forEach((index) => {
      this.slides.at(index).classList.add(this.names.snapped);
    });
    prev.filter((item) => !next.includes(item)).forEach((index) => {
      this.slides.at(index).classList.remove(this.names.snapped);
    });
    this.snapped = next;
  }
  handleSlidesInView() {
    const prev = this.inView;
    const next = this.api.slidesInView();
    next.filter((item) => !prev.includes(item)).forEach((index) => {
      this.slides.at(index).classList.add(this.names.inView);
    });
    prev.filter((item) => !next.includes(item)).forEach((index) => {
      this.slides.at(index).classList.remove(this.names.inView);
    });
    this.inView = next;
  }
}
__decorateClass$3([
  Bind()
], CarouselPluginClasses.prototype, "handleInit");
__decorateClass$3([
  Bind()
], CarouselPluginClasses.prototype, "handlePointerDown");
__decorateClass$3([
  Bind()
], CarouselPluginClasses.prototype, "handlePointerUp");
__decorateClass$3([
  Bind()
], CarouselPluginClasses.prototype, "handleSelect");
__decorateClass$3([
  Bind()
], CarouselPluginClasses.prototype, "handleSlidesInView");
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$2(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$2(target, key, result);
  return result;
};
class CarouselPluginMirror extends CarouselPlugin {
  constructor() {
    super(...arguments);
    this.events = {
      reInit: this.handleEvent,
      select: this.handleEvent
    };
  }
  get active() {
    return !!this.instance.mirror;
  }
  get carousel() {
    return document.getElementById(this.instance.mirror);
  }
  initialize() {
    if (!this.active) return;
    if (!this.instance.mirrorType?.startsWith("sync")) return;
    super.initialize();
    this.handleEvent();
  }
  // TODO
  scrollTo(index, jump) {
    let shouldJump;
    switch (this.instance.mirrorType) {
      case "click-inherit":
        shouldJump = jump ?? false;
        break;
      case "click-jump":
        shouldJump = true;
        break;
      case "click-smooth":
        shouldJump = false;
        break;
      default:
        shouldJump = jump ?? false;
    }
    this.carousel?.scrollToIndex(index, shouldJump);
  }
  handleEvent() {
    const index = this.api.selectedScrollSnap();
    const jump = this.instance.mirrorType === "sync-jump";
    this.carousel?.scrollToIndex(index, jump);
  }
}
__decorateClass$2([
  Bind()
], CarouselPluginMirror.prototype, "handleEvent");
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$1(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1(target, key, result);
  return result;
};
class CarouselPluginTween extends CarouselPlugin {
  constructor() {
    super(...arguments);
    this.events = {
      reInit: this.handleEvent,
      scroll: this.handleEvent,
      slideFocus: this.handleEvent
    };
  }
  get active() {
    return !!this.instance.tweenFactorBase;
  }
  initialize() {
    if (!this.active) return;
    super.initialize();
    this.handleEvent(this.api, "select");
  }
  terminate() {
    super.terminate();
    this.api.slideNodes().forEach((slide) => {
      slide.style.removeProperty("--plus-carousel-factor-1");
      slide.style.removeProperty("--plus-carousel-factor-2");
    });
  }
  handleEvent(_event, eventName) {
    const engine = this.api.internalEngine();
    const isScrollEvent = eventName === "scroll";
    const slidesInView = this.api.slidesInView();
    const scrollProgress = this.api.scrollProgress();
    const scrollSnapList = this.api.scrollSnapList();
    const factor = this.instance.tweenFactorBase * scrollSnapList.length;
    scrollSnapList.forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      engine.slideRegistry[snapIndex].forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;
        engine.options.loop && engine.slideLooper.loopPoints.forEach((item) => {
          const target = item.target();
          if (target === 0) return;
          if (slideIndex !== item.index) return;
          const sign = Math.sign(target);
          diffToTarget = scrollSnap + sign * (1 - sign * scrollProgress);
        });
        const factor1 = diffToTarget * factor;
        const factor2 = Math.min(Math.max(1 - Math.abs(factor1), 0), 1);
        const style = this.api.slideNodes()[slideIndex].style;
        style.setProperty("--plus-carousel-factor-1", factor1.toFixed(5));
        style.setProperty("--plus-carousel-factor-2", factor2.toFixed(5));
      });
    });
  }
}
__decorateClass$1([
  Bind()
], CarouselPluginTween.prototype, "handleEvent");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let EmblaCarouselCore;
let Carousel = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.align = "center";
    this.axis = "x";
    this.containScroll = "trimSnaps";
    this.dragThreshold = 10;
    this.duration = 25;
    this.inViewThreshold = 0;
    this.mirrorType = "sync-smooth";
    this.slidesToScroll = 1;
    this.startIndex = 0;
    this.state = {
      api: void 0,
      register: this.register.bind(this),
      unregister: this.unregister.bind(this),
      // TODO
      scrollTo: (index, jump) => {
        this.api.scrollTo(index, jump);
        this.internalPlugins.mirror.scrollTo(index, jump);
      }
    };
    this.internalPlugins = {
      autoHeight: new CarouselPluginAutoHeight(this),
      classes: new CarouselPluginClasses(this),
      mirror: new CarouselPluginMirror(this),
      tween: new CarouselPluginTween(this)
    };
    this.events = [
      "destroy",
      "init",
      "pointerDown",
      "pointerUp",
      "reInit",
      "resize",
      // 'scroll',
      "select",
      "settle",
      "slideFocus",
      "slideFocusStart",
      // 'slidesChanged',
      "slidesInView"
    ];
  }
  get api() {
    return this.emblaApi;
  }
  get options() {
    return {
      align: this.align,
      axis: this.axis,
      container: this.$viewport.shadowRoot.querySelector("div"),
      containScroll: this.containScroll === "off" ? false : this.containScroll,
      direction: this.dir,
      dragFree: this.draggable === "free",
      dragThreshold: this.dragThreshold,
      duration: this.duration,
      inViewThreshold: this.inViewThreshold,
      loop: this.loop,
      slidesToScroll: this.slidesToScroll,
      slides: Array.from(this.$viewport.children),
      skipSnaps: this.draggable === "free",
      startIndex: this.startIndex,
      watchDrag: !!this.draggable,
      watchFocus: !!this.focusable,
      watchResize: !!this.resizable,
      watchSlides: false
    };
  }
  canScrollNext() {
    return !!this.api?.canScrollNext();
  }
  canScrollPrevious() {
    return !!this.api?.canScrollPrev();
  }
  previousScrollSnap() {
    return this.api?.previousScrollSnap() || 0;
  }
  scrollNext(jump) {
    this.api?.scrollNext(jump);
  }
  scrollPrevious(jump) {
    this.api?.scrollPrev(jump);
  }
  scrollProgress() {
    return this.api?.scrollProgress() || 0;
  }
  scrollSnapList() {
    return this.api?.scrollSnapList() || [];
  }
  scrollToIndex(index, jump) {
    this.api?.scrollTo(index, jump);
  }
  selectedScrollSnap() {
    return this.api?.selectedScrollSnap() || 0;
  }
  slideNodes() {
    return this.api?.slideNodes() || [];
  }
  slidesInView() {
    return this.api?.slidesInView() || [];
  }
  slidesNotInView() {
    return this.api?.slidesNotInView() || [];
  }
  watcher(_next, _prev, name) {
    switch (name) {
      case "autoHeight":
        this.internalPlugins.autoHeight.reinitialize();
        break;
      case "classes":
        this.internalPlugins.classes.reinitialize();
        break;
      case "mirrorTo":
      case "mirrorType":
        this.internalPlugins.mirror.reinitialize();
        break;
      case "tweenFactorBase":
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
    this.api.on("init", () => {
      Object.values(this.internalPlugins).forEach((plugin) => {
        plugin.initialize();
      });
    }).on("destroy", () => {
      Object.values(this.internalPlugins).forEach((plugin) => {
        plugin.terminate();
      });
    });
    this.events.forEach((event) => {
      this.api.on(event, () => {
        this[`plus${event.at(0).toUpperCase()}${event.slice(1)}`]();
      });
    });
    this.state = Object.assign({}, this.state, {
      api: this.api
    });
  }
  terminate() {
    this.api?.destroy();
    this.$viewport = void 0;
    this.emblaApi = void 0;
    this.state = Object.assign({}, this.state, {
      api: this.api
    });
  }
  register($element) {
    switch ($element.localName.split("-").at(-1)) {
      case "slide":
        if (!this.api) break;
        this.plusSlidesChanged();
        this.api.reInit(this.options, this.plugins);
        break;
      case "slides":
        this.api?.destroy();
        this.$viewport = $element;
        this.initialize();
        break;
    }
  }
  unregister($element) {
    switch ($element.localName.split("-").at(-1)) {
      case "slide":
        if (!this.api) break;
        this.plusSlidesChanged();
        this.api.reInit(this.options, this.plugins);
        break;
      case "slides":
        this.terminate();
        break;
    }
  }
  connectedCallback() {
    import("embla-carousel").then((module) => {
      EmblaCarouselCore = module.default || module;
      this.initialize();
    }).catch((error) => {
      throw new ExternalDependencyError(this.$host, "embla-carousel", {
        cause: error
      });
    });
  }
  disconnectedCallback() {
    this.api?.destroy();
  }
  render() {
    return html`<slot />`;
  }
};
Carousel.tag = "plus-carousel";
Carousel.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 16
  })
], Carousel.prototype, "align", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Carousel.prototype, "autoHeight", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Carousel.prototype, "axis", 2);
__decorateClass([
  Property({
    type: 4
  })
], Carousel.prototype, "classes", 2);
__decorateClass([
  Property({
    type: 16
  })
], Carousel.prototype, "containScroll", 2);
__decorateClass([
  Property({
    type: 16
  })
], Carousel.prototype, "draggable", 2);
__decorateClass([
  Property({
    type: 128
  })
], Carousel.prototype, "dragThreshold", 2);
__decorateClass([
  Property({
    type: 128
  })
], Carousel.prototype, "duration", 2);
__decorateClass([
  Property({
    type: 4
  })
], Carousel.prototype, "focusable", 2);
__decorateClass([
  Property({
    type: 128
  })
], Carousel.prototype, "inViewThreshold", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Carousel.prototype, "loop", 2);
__decorateClass([
  Property({
    type: 1
  })
], Carousel.prototype, "plugins", 2);
__decorateClass([
  Property({
    type: 512
  })
], Carousel.prototype, "mirror", 2);
__decorateClass([
  Property({
    type: 16
  })
], Carousel.prototype, "mirrorType", 2);
__decorateClass([
  Property({
    type: 4
  })
], Carousel.prototype, "resizable", 2);
__decorateClass([
  Property({
    type: 144
  })
], Carousel.prototype, "slidesToScroll", 2);
__decorateClass([
  Property({
    type: 128
  })
], Carousel.prototype, "startIndex", 2);
__decorateClass([
  Property({
    type: 128
  })
], Carousel.prototype, "tweenFactorBase", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], Carousel.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  })
], Carousel.prototype, "api", 1);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], Carousel.prototype, "overrides", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusDestroy", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusInit", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusPointerDown", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusPointerUp", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusReInit", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusResize", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusScroll", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusSelect", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusSettle", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusSlideFocus", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusSlideFocusStart", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusSlidesChanged", 2);
__decorateClass([
  Event()
], Carousel.prototype, "plusSlidesInView", 2);
__decorateClass([
  State(),
  Provider("carousel")
], Carousel.prototype, "state", 2);
__decorateClass([
  Method()
], Carousel.prototype, "canScrollNext", 1);
__decorateClass([
  Method()
], Carousel.prototype, "canScrollPrevious", 1);
__decorateClass([
  Method()
], Carousel.prototype, "previousScrollSnap", 1);
__decorateClass([
  Method()
], Carousel.prototype, "scrollNext", 1);
__decorateClass([
  Method()
], Carousel.prototype, "scrollPrevious", 1);
__decorateClass([
  Method()
], Carousel.prototype, "scrollProgress", 1);
__decorateClass([
  Method()
], Carousel.prototype, "scrollSnapList", 1);
__decorateClass([
  Method()
], Carousel.prototype, "scrollToIndex", 1);
__decorateClass([
  Method()
], Carousel.prototype, "selectedScrollSnap", 1);
__decorateClass([
  Method()
], Carousel.prototype, "slideNodes", 1);
__decorateClass([
  Method()
], Carousel.prototype, "slidesInView", 1);
__decorateClass([
  Method()
], Carousel.prototype, "slidesNotInView", 1);
__decorateClass([
  Watch()
], Carousel.prototype, "watcher", 1);
Carousel = __decorateClass([
  Element()
], Carousel);
export {
  Carousel
};
