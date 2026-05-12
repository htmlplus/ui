import {
	Bind,
	Element,
	Event,
	type EventEmitter,
	Method,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Query,
	State,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

import type { PlusBrowseEvent, PlusBrowseFile } from './types';

/**
 * Allows you to select file or files by using click or drag & drop functionality.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, multiple, accept, min-and-max, min-and-max-size, droppable
 */
@Element()
export class PlusBrowse extends PlusCore {
	/**
	 * One or more
	 * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
	 * describing file types to allow.
	 */
	@Property()
	accept: string = '';

	/**
	 * Disables the element functionality.
	 */
	@Property({ reflect: true })
	disabled: boolean = false;

	/**
	 * Adds droppable ability.
	 */
	@Property()
	droppable: boolean = false;

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
	multiple: boolean = false;

	/**
	 * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * See [Variant](/variant-property) for details.
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	/**
	 * Fires when file(s) are selected.
	 */
	@Event()
	plusChange!: EventEmitter<PlusBrowseEvent>;

	/**
	 * Fires when selected invalid file(s).
	 */
	@Event()
	plusError!: EventEmitter<PlusBrowseEvent>;

	/**
	 * Fires when file(s) are added successfully.
	 */
	@Event()
	plusSuccess!: EventEmitter<PlusBrowseEvent>;

	@Query('input')
	$input!: HTMLElement;

	@State()
	dragging: boolean = false;

	timeout?: number;

	get attributes() {
		const attributes: {
			dragging?: boolean;
			onClick?: (event: MouseEvent) => void;
			onDragLeave?: (event: DragEvent) => void;
			onDragOver?: (event: DragEvent) => void;
			onDrop?: (event: DragEvent) => void;
		} = {};

		if (this.disabled) return attributes;

		attributes.onClick = this.onClick;

		if (!this.droppable) return attributes;

		attributes.dragging = this.dragging;
		attributes.onDragLeave = this.onDragLeave;
		attributes.onDragOver = this.onDragOver;
		attributes.onDrop = this.onDrop;

		return attributes;
	}

	get types() {
		return this.accept.split(',').map((type) => type.trim());
	}

	/**
	 * Opens the browse dialog.
	 */
	@Method()
	browse(): void {
		this.$input.click();
	}

	do(files?: FileList) {
		const length = files?.length ?? 0;

		const detail: PlusBrowseEvent = {
			files: []
		};

		if (this.min !== undefined && this.min > length) {
			detail.error = {
				type: 'min',
				message: `A minimum of "${this.min}" file(s) must be selected`
			};
		}

		if (this.max !== undefined && this.max < length) {
			detail.error = {
				type: 'max',
				message: `A maximum of "${this.max}" file(s) must be selected.`
			};
		}

		for (let i = 0; i < length; i++) {
			const file = files?.[i];

			if (!file) continue;

			const value: PlusBrowseFile = {
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

			if (this.minSize !== undefined && this.minSize > value.file.size) {
				value.errors.push({
					type: 'min',
					message: `The minimum file size allowed is "${this.minSize}" bytes.`
				});
			}

			if (this.maxSize !== undefined && this.maxSize < value.file.size) {
				value.errors.push({
					type: 'min',
					message: `The maximum file size allowed is "${this.maxSize}" bytes.`
				});
			}

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
	onChange(event: Event) {
		const target = event.target as HTMLInputElement;

		const files = target.files;

		if (!files || !files.length) return;

		this.do(files);
	}

	@Bind()
	onDragLeave() {
		clearTimeout(this.timeout);

		this.timeout = window.setTimeout(() => {
			this.dragging = false;
		}, 50);
	}

	@Bind()
	onDragOver(event: DragEvent) {
		clearTimeout(this.timeout);

		event.preventDefault();

		this.dragging = true;
	}

	@Bind()
	onDrop(event: DragEvent) {
		event.preventDefault();

		event.stopPropagation();

		this.dragging = false;

		this.do(event.dataTransfer?.files);
	}

	render() {
		return (
			<host value={this} {...this.attributes}>
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
