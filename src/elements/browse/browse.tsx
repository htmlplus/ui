import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Query,
  State
} from '@htmlplus/element';

import { PlusCore } from '@/core';

import { BrowseEvent, BrowseFile } from './browse.types';

/**
 * @stable
 *
 * @slot default - The default slot.
 */
@Element()
export class Browse extends PlusCore {
  /**
   * One or more
   * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
   * describing file types to allow.
   */
  @Property()
  accept?: string;

  /**
   * Disables the element functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Adds droppable ability.
   */
  @Property()
  droppable?: boolean;

  /**
   * Specifies the minimum number of files.
   */
  @Property()
  min?: number;

  /**
   * Specifies the maximum number of files.
   */
  @Property()
  max?: number;

  /**
   * Specifies the minimum size of the file(s) in bytes.
   */
  @Property()
  minSize?: number;

  /**
   * Specifies the maximum size of the file(s) in bytes.
   */
  @Property()
  maxSize?: number;

  /**
   * Allows to select more than one file.
   */
  @Property()
  multiple?: boolean;

  /**
   * Fires when file(s) are selected.
   */
  @Event()
  plusChange!: EventEmitter<BrowseEvent>;

  /**
   * Fires when selected invalid file(s).
   */
  @Event()
  plusError!: EventEmitter<BrowseEvent>;

  /**
   * Fires when file(s) are added successfully.
   */
  @Event()
  plusSuccess!: EventEmitter<BrowseEvent>;

  @Query('input')
  $input!: HTMLElement;

  @State()
  dragging?: boolean;

  timeout?;

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
   * Opens the browse dialog.
   */
  @Method()
  browse(): void {
    this.$input.click();
  }

  do(files: FileList) {
    const detail: BrowseEvent = {
      error: undefined,
      files: []
    };

    if (this.min > files.length)
      detail.error = {
        type: 'min',
        message: `A minimum of "${this.min}" file(s) must be selected`
      };

    if (this.max < files.length)
      detail.error = {
        type: 'max',
        message: `A maximum of "${this.max}" file(s) must be selected.`
      };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const value: BrowseFile = {
        errors: [],
        file
      };

      for (const type of this.types) {
        const isMime = /\//.exec(type);

        const isPattern = /\/*/.exec(type);

        if (!isMime && value.file.name.endsWith(type)) break;

        if (isMime && !isPattern && value.file.type === type) break;

        if (isMime && isPattern && value.file.type.startsWith(type.slice(0, -1))) break;

        value.errors.push({
          type: 'accept',
          message: `Only file(s) with the extensions "${this.accept}" are accepted.`
        });
      }

      if (this.minSize > value.file.size)
        value.errors.push({
          type: 'min',
          message: `The minimum file size allowed is "${this.minSize}" bytes.`
        });

      if (this.maxSize < value.file.size)
        value.errors.push({
          type: 'min',
          message: `The maximum file size allowed is "${this.maxSize}" bytes.`
        });

      detail.files.push(value);
    }

    const error = detail.error || detail.files.some((file) => file.errors.length);

    const filtered = detail.files.filter((file) => !error || file.errors.length);

    const data = Object.assign({}, detail, { files: filtered });

    error ? this.plusError(data) : this.plusSuccess(data);

    this.plusChange(detail);
  }

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

    this.timeout = setTimeout(() => {
      this.dragging = false;
    }, 50);
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
      <host {...this.attributes}>
        <slot />
        <input
          accept={this.accept}
          multiple={this.multiple}
          type="file"
          onChange={this.onChange}
          onClick={(event) => event.stopPropagation()}
        />
      </host>
    );
  }
}
