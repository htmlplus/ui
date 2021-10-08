import { Attributes, Component, Bind, Event, EventEmitter, GlobalConfig, Method, Property, State } from '@app/decorators';
import { BrowseEvent, BrowseEventFile } from './browse.types';

/**
 * @slot default - The default slot.
 * @examples default
 */
@Component()
export class Browse {

  /**
   * One or more 
   * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
   * describing file types to allow.
   */
  @Property()
  accept?: string;

  /**
   * Disable the component.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Add droppable ability.
   */
  @Property()
  droppable?: boolean;

  /**
   * Minimum number of files.
   */
  @Property()
  min?: number;

  /**
   * Maximum number of files.
   */
  @Property()
  max?: number;

  /**
   * The minimum size of the file(s) in bytes.
   */
  @Property()
  minSize?: number;

  /**
   * The maximum size of the file(s) in bytes.
   */
  @Property()
  maxSize?: number;

  /**
   * A Boolean which, if present, indicates that the user may choose more than one file.
   */
  @Property()
  multiple?: boolean;

  /**
   * Emitted when file(s) are selected.
   */
  @Event({ bubbles: false })
  plusChange!: EventEmitter<BrowseEvent>;

  /**
   * Emitted when selected invalid file(s).
   */
  @Event({ bubbles: false })
  plusError!: EventEmitter<BrowseEvent>;

  /**
   * Emitted when file(s) are added successfully.
   */
  @Event({ bubbles: false })
  plusSuccess!: EventEmitter<BrowseEvent>;

  @GlobalConfig('browse')
  config?;

  $input!: HTMLElement;

  @State()
  dragging?: boolean;

  timeout?;

  @Attributes()
  get attributes() {

    const attributes = {};

    if (this.disabled) return attributes;

    attributes['onClick'] = this.onClick;

    if (!this.droppable) return attributes;

    attributes['dragging'] = this.dragging;
    attributes['onDragLeave'] = this.onDragLeave;
    attributes['onDragOver'] = this.onDragOver;
    attributes['onDrop'] = this.onDrop;

    return attributes;
  }

  get types() {
    return (this.accept || '').split(',').map((type) => type.trim());
  }

  /**
   * External Methods
   */

  /**
   * Open the browse dialog.
   */
  @Method()
  browse() {
    this.$input.click();
  }

  /**
   * Internal Methods
   */

  do(files: FileList) {

    const detail: BrowseEvent = {
      errors: [],
      files: [],
    }

    if (files.length < this.min)
      detail.errors.push('MIN');

    if (files.length > this.max)
      detail.errors.push('MAX');

    for (let i = 0; i < files.length; i++) {

      const value: BrowseEventFile = {
        errors: [],
        file: files[i],
      }

      for (const type of this.types) {

        const isMime = /\//.exec(type);

        const isPattern = /\/*/.exec(type);

        if (!isMime && value.file.name.endsWith(type)) break;

        if (isMime && !isPattern && value.file.type === type) break;

        if (isMime && isPattern && value.file.type.startsWith(type.slice(0, -1))) break;

        value.errors.push('ACCEPT');
      }

      if (this.minSize && this.minSize > value.file.size)
        value.errors.push('MIN_SIZE');

      if (this.maxSize && this.maxSize < value.file.size)
        value.errors.push('MAX_SIZE');

      detail.files.push(value);
    }

    const isSuccess = !detail.errors.length && !detail.files.some((file) => !!file.errors.length);

    if (isSuccess) {

      const files = detail.files.filter((file) => !file.errors.length);

      const data = Object.assign({}, detail, { files });

      this.plusSuccess(data);
    }
    else {

      const files = detail.files.filter((file) => file.errors.length);

      const data = Object.assign({}, detail, { files });

      this.plusError(data);
    }

    this.plusChange(detail);
  }

  /**
   * Events handler
   */

  @Bind()
  onClick() {
    this.$input.click();
  }

  @Bind()
  onChange(event) {

    const files = event.target.files;

    if (!files.length) return;

    this.do(files);
  }

  @Bind()
  onDragLeave() {

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => this.dragging = false, 50);
  }

  @Bind()
  onDragOver(event) {

    clearTimeout(this.timeout);

    event.preventDefault();

    this.dragging = true;
  }

  @Bind()
  onDrop(event) {

    event.preventDefault();

    event.stopPropagation();

    this.dragging = false;

    this.do(event.dataTransfer.files);
  }

  render() {
    return (
      <>
        <slot />
        <input
          accept={this.accept}
          multiple={this.multiple}
          ref={this.$input}
          type="file"
          onChange={this.onChange}
          onClick={(event) => event.stopPropagation()}
        />
      </>
    )
  }
}