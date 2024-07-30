import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Query,
  Watch
} from '@htmlplus/element';

import type CoreType from 'signature_pad';
import type { PointGroup } from 'signature_pad';

import { PlusForm } from '@/core';

let Core;

/**
 * @stable
 *
 * @part canvas - The canvas element.
 */
@Element()
export class Signature extends PlusForm {
  /**
   * Specifies the background color.
   */
  @Property()
  backgroundColor?: string = 'lightgray';

  /**
   * Clears the canvas after resizing.
   */
  @Property()
  clearOnResize?: boolean;

  /**
   * Specifies the color of the strokes.
   */
  @Property()
  color?: string = 'black';

  /**
   * Specifies the distance between the previous point and the next one.
   */
  @Property()
  distance?: number;

  /**
   * Specifies the radius of a single dot.
   */
  @Property()
  dotSize?: number;

  /**
   * Specifies the maximum width of the strokes.
   */
  @Property()
  maxWidth?: number = 2.5;

  /**
   * Specifies the minimum width of the strokes.
   */
  @Property()
  minWidth?: number = 0.5;

  /**
   * Observes the element dimensions to apply new changes on the canvas.
   */
  @Property()
  resizable?: boolean;

  /**
   * Specifies the time distance between the previous point and the next one.
   */
  @Property()
  throttle?: number = 16;

  /**
   * Gets/Sets data.
   */
  @Property()
  value?: string;

  /**
   * Specifies the velocity based on the previous velocity.
   */
  @Property()
  velocity?: number = 0.7;

  /**
   * The canvas element.
   */
  @Property()
  get canvas(): HTMLCanvasElement {
    return this.$canvas;
  }

  /**
   * Specifies whether redo can be performed or not.
   */
  @Property()
  get redoable(): boolean {
    return this.index != this.history.length - 1;
  }

  /**
   * Specifies whether undo can be performed or not.
   */
  @Property()
  get undoable(): boolean {
    return this.index != -1;
  }

  /**
   * Fires after the latest changes have occurred with a delay to prepare the value.
   */
  @Event()
  plusChange!: EventEmitter<void>;

  /**
   * Fires after updating the stroke.
   */
  @Event()
  plusAfter!: EventEmitter<PointerEvent>;

  /**
   * Fires before updating the stroke.
   */
  @Event()
  plusBefore!: EventEmitter<PointerEvent>;

  /**
   * Fires after a stroke ends.
   */
  @Event()
  plusEnd!: EventEmitter<PointerEvent>;

  /**
   * Fires before a stroke starts.
   */
  @Event()
  plusStart!: EventEmitter<PointerEvent>;

  /**
   * Reverts the last undo action.
   */
  @Method()
  redo() {
    if (!this.redoable) return;

    this.index++;

    const data = this.history[this.index] || [];

    this.instance.fromData(data);

    this.update(true, true);
  }

  /**
   * Syncs the canvas dimensions with the element dimensions.
   * @param clear - Clears the canvas after resizing.
   */
  @Method()
  resize(clear?: boolean) {
    const { width, height, offsetWidth, offsetHeight } = this.$canvas;

    if (width == offsetWidth && height == offsetHeight) return;

    this.$canvas.width = offsetWidth;

    this.$canvas.height = offsetHeight;

    if (!this.instance) return;

    if (clear ?? this.clearOnResize) {
      return this.reset(true);
    }

    this.instance.fromData(this.clone());
  }

  /**
   * Reverts the last action.
   */
  @Method()
  undo() {
    if (!this.undoable) return;

    this.index--;

    const data = this.history[this.index] || [];

    this.instance.fromData(data);

    this.update(true, true);
  }

  @Query('canvas')
  $canvas!: HTMLCanvasElement;

  instance?: CoreType;

  history: PointGroup[][] = [];

  index: number = -1;

  observer: ResizeObserver = new ResizeObserver(() => this.resize());

  previous?: string;

  timeout?: number = 0;

  @Watch()
  watcher(next, prev, name) {
    // TODO
    if (!this.instance) {
      return setTimeout(() => {
        this.watcher(next, prev, name);
      }, 250);
    }

    switch (name) {
      case 'color':
        this.instance.penColor = next;
        break;
      case 'disabled':
        this.instance[next ? 'off' : 'on']();
        break;
      case 'distance':
        this.instance.minDistance = next;
        break;
      case 'velocity':
        this.instance.velocityFilterWeight = next;
        break;
      case 'backgroundColor':
      case 'dotSize':
      case 'maxWidth':
      case 'minWidth':
      case 'throttle':
        this.instance[name] = next;
        break;
      case 'resizable':
        this.observer[next ? 'observe' : 'unobserve'](this.$host);
        break;
      case 'value':
        // TODO
        this.load();
        break;
    }

    if (name == 'value') return;

    // TODO
    this.instance.fromData(this.clone());
  }

  clone() {
    return JSON.parse(JSON.stringify(this.instance.toData()));
  }

  initialize() {
    const options = {
      backgroundColor: this.backgroundColor,
      dotSize: this.dotSize,
      minDistance: this.distance,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      penColor: this.color,
      throttle: this.throttle,
      velocityFilterWeight: this.velocity
    };

    this.instance = new Core(this.$canvas, options);

    this.instance.addEventListener('beginStroke', this.onStart);
    this.instance.addEventListener('endStroke', this.onEnd);

    const events = {
      afterUpdateStroke: this.plusAfter,
      beforeUpdateStroke: this.plusBefore,
      beginStroke: this.plusStart,
      endStroke: this.plusEnd
    };

    for (const key in events) {
      if (!events.hasOwnProperty(key)) continue;
      this.instance.addEventListener(key, (event) => {
        events[key](event['detail']);
      });
    }

    if (this.disabled) {
      this.instance.off();
    }

    if (this.resizable) {
      this.observer.observe(this.$host);
    }

    // TODO
    requestAnimationFrame(() => this.resize());
  }

  // TODO
  load() {
    if (this.previous == this.value) return;

    this.reset(false);

    this.previous = this.value;

    const image = document.createElement('img');

    image.src = 'data:image/svg+xml;base64,' + btoa(this.value);

    image.onerror = () => {
      image.remove();
    };

    image.onload = () => {
      const context = this.$canvas.getContext('2d');

      context.drawImage(image, 0, 0);

      image.remove();
    };
  }

  reset(includeValue: boolean) {
    this.index = -1;

    this.history = [];

    this.instance.clear();

    if (!includeValue) return;

    this.previous = this.value = undefined;
  }

  terminate() {
    this.observer.disconnect();
    this.instance?.off();
  }

  toSVG() {
    return this
      .instance
      .toSVG()
      .replace(/<svg[^>]*>(.*?)<\/svg>/, `<svg viewBox="0 0 ${this.$canvas.width} ${this.$canvas.height}">$1<svg>`);
  }

  update(force: boolean, silent: boolean) {
    if (!force && this.timeout > Date.now()) return;

    this.timeout = Date.now() + 500;

    const value = this.instance.isEmpty() ? undefined : this.toSVG();

    this.previous = this.value = value;

    if (silent) return;

    this.plusChange();
  }

  @Bind()
  onReset() {
    this.value = undefined;
  }

  @Bind()
  onStart() {
    if (this.value && this.index == -1) {
      this.reset(true);
    }
  }

  @Bind()
  onEnd() {
    this.index++;

    this.history[this.index] = this.clone();

    this.history.length = this.index + 1;

    this.update(false, false);
  }

  loadedCallback() {
    return import('signature_pad')
      .then((module) => {
        Core = module.default;
        try {
          this.initialize();
        } catch {
          throw new Error('TODO');
        }
      })
      .catch(() => {
        throw new Error(
          "The `signature` element depends on an external package, but it doesn't seem to be installed. Running `npm install signature_pad` will fix this problem."
        );
      });
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    // TODO: tabIndex
    return <canvas part="canvas" tabIndex={0}></canvas>;
  }
}
