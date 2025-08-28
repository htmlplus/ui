import { Bind } from '@htmlplus/element';

import { CarouselPlugin } from './base';

export class CarouselPluginClasses extends CarouselPlugin {
	private slides: HTMLElement[] = [];

	private inView: number[] = [];

	private snapped: number[] = [];

	private names = {
		draggable: 'draggable',
		dragging: 'dragging',
		inView: 'in-view',
		snapped: 'snapped'
	};

	private get active(): boolean {
		return !!this.instance.classes;
	}

	public events = {
		reInit: this.handleInit,
		select: this.handleSelect,
		slidesInView: this.handleSlidesInView,
		pointerDown: this.handlePointerDown,
		pointerUp: this.handlePointerUp
	};

	public initialize() {
		if (!this.active) return;

		super.initialize();

		this.handleInit();

		this.handleSelect();

		this.handleSlidesInView();
	}

	public terminate() {
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

	@Bind()
	private handleInit() {
		this.slides = this.api.slideNodes();

		const engine = this.api.internalEngine();

		const draggable = !!engine.options.watchDrag;

		if (draggable) {
			this.instance.$host.classList.add(this.names.draggable);
		} else {
			this.instance.$host.classList.remove(this.names.draggable);
		}
	}

	@Bind()
	private handlePointerDown() {
		this.instance.$host.classList.add(this.names.dragging);
	}

	@Bind()
	private handlePointerUp() {
		this.instance.$host.classList.remove(this.names.dragging);
	}

	@Bind()
	private handleSelect() {
		const prev = this.snapped;

		const next = this.api.internalEngine().slideRegistry[this.api.selectedScrollSnap()];

		next
			.filter((item) => !prev.includes(item))
			.forEach((index) => {
				this.slides.at(index).classList.add(this.names.snapped);
			});

		prev
			.filter((item) => !next.includes(item))
			.forEach((index) => {
				this.slides.at(index).classList.remove(this.names.snapped);
			});

		this.snapped = next;
	}

	@Bind()
	private handleSlidesInView() {
		const prev = this.inView;

		const next = this.api.slidesInView();

		next
			.filter((item) => !prev.includes(item))
			.forEach((index) => {
				this.slides.at(index).classList.add(this.names.inView);
			});

		prev
			.filter((item) => !next.includes(item))
			.forEach((index) => {
				this.slides.at(index).classList.remove(this.names.inView);
			});

		this.inView = next;
	}
}
