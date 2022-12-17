import { Element, Event, EventEmitter, Method, Property, Watch } from '@htmlplus/element';
import SignaturePad from 'signature_pad';
import { SignatureFromDataURLOptions, SignaturePointGroup } from './signature.types';

/**
 * TODO
 */
@Element()
export class Signature {
  /**
   * Specifies the background color.
   */
  @Property()
  backgroundColor?: string = 'rgba(0, 0, 0, 0)';

  /**
   * TODO
   */ 
  @Property()
  get canvas(): HTMLCanvasElement {
    return this.$canvas;
  }

  /**
   * TODO
   */ 
  @Property()
  get canRedo(): boolean {
    return this.index != this.history.length - 1;
  }

  /**
   * TODO
   */ 
  @Property()
  get canUndo(): boolean {
    return this.index != -1;
  } 

  /**
   * Specifies the color of the lines.
   */
  @Property()
  color?: string = 'black';

  /**
   * Disables the component's functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Specifies the radius of a single dot.
   */
  @Property()
  dotSize?: number;

  /**
   * Specifies the maximum width of the lines.
   */
  @Property()
  maxWidth?: number = 2.5;

  /**
   * Specifies the distance between the previous point and the next one.
   */
  @Property()
  minDistance?: number;

  /**
   * Specifies the minimum width of the lines
   */
  @Property()
  minWidth?: number = 0.5;

  /**
   * Specifies the color of the lines.
   */
  @Property()
  penColor?: string = 'black';

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

  instance?: SignaturePad;

  history: SignaturePointGroup[][] = [];

  index: number = -1;

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
   * @param data TODO
   * @param clear TODO
   */
  @Method()
  fromData(data: SignaturePointGroup[], clear?: boolean) {
    this.instance.fromData(data, { clear: !!clear });
  }

  /**
   * Draws from the data URL. [More](https://mdn.io/drawImage).
   * @param dataUrl TODO
   * @param options TODO
   */  
  @Method()
  async fromDataURL(dataUrl: string, options?: SignatureFromDataURLOptions) {
    await this.instance.fromDataURL(dataUrl, options);
  } 

  /**
   * Returns `true` if canvas is empty.
   */  
  @Method()
  isEmpty(): boolean {
    return this.instance.isEmpty();
  }

  /**
   * Returns data of the canvas.
   */  
  @Method()
  toData(): SignaturePointGroup[] {
    return this.instance.toData();
  }

  /**
   * Returns an SVG as a string.
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
    if (!this.canRedo) return;

    this.index++;

    const data = this.history[this.index] || [];

    this.fromData(data, true);
  }

  /**
   * Reverts the last action.
   */  
  @Method()
  undo() {
    if (!this.canUndo) return;

    this.index--;

    const data = this.history[this.index] || [];
    
    this.fromData(data, true);
  }

  @Watch([], true)
  watcher(next, prev, name) {
    switch (name) {
      case 'color':
        this.instance.penColor = next;
        break;
      case 'disabled':
        next ? this.instance.off() : this.instance.on();
        break;
      case 'velocity':
        this.instance.velocityFilterWeight = next;
        break;
      default:
        this.instance[name] = next;
        break;
    }
  }

  loadedCallback() {
    this.instance = new SignaturePad(this.$canvas);

    const events = {
      afterUpdateStroke: this.plusAfter,
      beforeUpdateStroke: this.plusBefore,
      beginStroke: this.plusStart,
      endStroke: this.plusEnd,
    }

    for (const key in events) {
      if (!events.hasOwnProperty(key)) continue;
      this.instance.addEventListener(key, (event) => {
        events[key](event['detail']);
      })
    } 

    this.instance.addEventListener('endStroke', () => {
      const data = JSON.parse(JSON.stringify(this.toData()));

      this.index++;

      this.history[this.index] = data;
      
      this.history.length = this.index + 1;
    })
  }

  disconnectedCallback() {
    this.instance.off();
  }

  render() {
    return (
      <canvas ref={($element) => this.$canvas = $element}></canvas>
    )
  }
}
