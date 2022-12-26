import { Bind, Element, Event, EventEmitter, Method, Property, Watch } from '@htmlplus/element';
import SignaturePad from 'signature_pad';
import * as Helpers from '@app/helpers';
import { SignatureFromDataURLOptions, SignaturePointGroup } from './signature.types';

/**
 * @part canvas - The canvas element.
 */
@Element()
export class Signature {
  /**
   * Specifies the background color.
   */
  @Property()
  backgroundColor?: string = 'rgba(0, 0, 0, 0)';

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
   * Disables the component's functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

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
   * Observes the component dimensions to apply new changes on the canvas.
   */
  @Property()
  resizable?: boolean;

  /**
   * Specifies the time distance between the previous point and the next one.
   */
  @Property()
  throttle?: number = 16;

  /**
   * Specifies the velocity based on the previous velocity.
   */
  @Property()
  velocity?: number = 0.7;

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

  $canvas!: HTMLCanvasElement;

  get $host() {
    return Helpers.host(this);
  }

  instance?: SignaturePad;

  history: SignaturePointGroup[][] = [];

  index: number = -1;

  observer: ResizeObserver = new ResizeObserver(this.onResize);

  /**
   * Specifies whether redo can be performed or not.
   */
  @Method()
  canRedo(): boolean {
    return this.index != this.history.length - 1;
  }

  /**
   * Specifies whether undo can be performed or not.
   */
  @Method()
  canUndo(): boolean {
    return this.index != -1;
  }

  /**
   * The canvas element.
   */
  @Method()
  canvas(): HTMLCanvasElement {
    return this.$canvas;
  }

  /**
   * Clears the canvas.
   */
  @Method()
  clear() {
    this.index = -1;
    this.history = [];
    this.instance.clear();
  }

  /**
   * Draws from the data.
   * @param data Collections of points.
   * @param clear Clears the canvas before drawing new points.
   */
  @Method()
  fromData(data: SignaturePointGroup[], clear?: boolean) {
    if (clear) this.clear();
    this.instance.fromData(data);
  }

  /**
   * Draws from the data URL. [More](https://mdn.io/drawImage).
   * This method does not populate the internal data structure that represents the drawn signature. 
   * Thus, after using `fromDataURL`, `toData` won't work properly.
   * @param dataUrl A string containing the [data URL](https://mdn.io/dataURL).
   * @param options TODO
   */
  @Method()
  async fromDataURL(dataUrl: string, options?: SignatureFromDataURLOptions) {
    await this.instance.fromDataURL(
      dataUrl,
      {
        ratio: options.ratio,
        width: options.width,
        height: options.height,
        xOffset: options.offsetX,
        yOffset: options.offsetY,
      }
    )
  }

  /**
   * Returns `true` if canvas is empty.
   */
  @Method()
  isEmpty(): boolean {
    return this.instance?.isEmpty();
  }
  
  /**
   * Returns data of the canvas.
   * @returns Collections of points.
   */
  @Method()
  toData(): SignaturePointGroup[] {
    return JSON.parse(JSON.stringify(this.instance.toData()));
  }
  
  /**
   * Returns [data URL](https://mdn.io/dataURL). [More](https://mdn.io/toDataURL).
   */
  toDataURL(type?: string, encoderOptions?: number): string;
  toDataURL(type: 'image/svg+xml', includeBackgroundColor?: boolean): string;
  @Method()
  toDataURL(type?: string, options?: any): string {
    if (type == 'image/svg+xml') {
      options = { includeBackgroundColor: options };
    }
    return this.instance.toDataURL(type, options);
  }

  /**
   * Returns SVG string.
   * @param includeBackgroundColor Adds the background color to the SVG output.
   */
  @Method()
  toSVG(includeBackgroundColor?: boolean): string {
    return this.instance.toSVG({ includeBackgroundColor });
  }

  /**
   * Reverts the last undo action.
   */
  @Method()
  redo() {
    if (!this.canRedo()) return;

    this.index++;

    const data = this.history[this.index] || [];

    this.instance.fromData(data);
  }

  /**
   * Syncs the canvas dimensions with the component dimensions.
   * @param clear Clears the canvas after resizing.
   */
  @Method()
  resize(clear?: boolean) {
    const { width, height, offsetWidth, offsetHeight } = this.$canvas;

    if (width == offsetWidth && height == offsetHeight) return

    this.$canvas.width = offsetWidth;

    this.$canvas.height = offsetHeight;

    if (!this.instance) return;

    if (clear ?? this.clearOnResize) return this.clear();

    this.fromData(this.toData());
  }

  /**
   * Reverts the last action.
   */
  @Method()
  undo() {
    if (!this.canUndo()) return;

    this.index--;

    const data = this.history[this.index] || [];

    this.instance.fromData(data);
  }

  @Watch([], true)
  watcher(next, prev, name) {
    switch (name) {
      case 'color':
        this.instance.penColor = next;
        break;
      case 'disabled':
        if (next) {
          this.instance.off();
        } else {
          this.instance.on();
        }
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
        if (next) {
          this.observer.observe(this.$host);
        } else {
          this.observer.unobserve(this.$host);
        }
        break;
    }

    // TODO
    this.fromData(this.toData());
  }

  loadedCallback() {
    this.instance = new SignaturePad(this.$canvas);

    this.instance.addEventListener('endStroke', this.onEnd);

    const events = {
      afterUpdateStroke: this.plusAfter,
      beforeUpdateStroke: this.plusBefore,
      beginStroke: this.plusStart,
      endStroke: this.plusEnd,
    };

    for (const key in events) {
      if (!events.hasOwnProperty(key)) continue;
      this.instance.addEventListener(key, (event) => {
        events[key](event['detail']);
      });
    }

    // TODO
    requestAnimationFrame(() => this.resize());
  }

  @Bind()
  onEnd() {
    this.index++;

    this.history[this.index] = this.toData();

    this.history.length = this.index + 1;
  }

  @Bind()
  onResize() {
    this.resize();
  }

  disconnectedCallback() {
    this.observer.disconnect();
    if (!this.instance) return;
    this.instance.off();
  }

  render() {
    return (
      <canvas part="canvas" ref={($element) => this.$canvas = $element}></canvas>
    )
  }
}
