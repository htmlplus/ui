export type AnimationElement = HTMLElement | (() => HTMLElement);

export type AnimationEvent = (parameters?: unknown) => void;

export type AnimationState = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';

export interface AnimationConfig {
	key: string;
	source: AnimationElement;
	target: AnimationElement;
	states?: {
		[key in AnimationState]?: string;
	};
	onEnter?: AnimationEvent;
	onEntering?: AnimationEvent;
	onEntered?: AnimationEvent;
	onLeave?: AnimationEvent;
	onLeaving?: AnimationEvent;
	onLeaved?: AnimationEvent;
}

export class Animation {
	public state: AnimationState = 'leaved';

	private config: AnimationConfig;

	private destroy?: () => void;

	private get animation() {
		return this.source.getAnimations()[0];
	}

	private get source() {
		const element = this.config.source;

		if (typeof element === 'function') return element();

		return element;
	}

	private get target() {
		const element = this.config.target;

		if (typeof element === 'function') return element();

		return element;
	}

	constructor(config: AnimationConfig) {
		this.config = Object.assign({}, this.config, config, {
			states: Object.assign(
				{},
				{
					enter: 'enter',
					entering: 'entering',
					entered: 'entered',
					leave: 'leave',
					leaving: 'leaving',
					leaved: 'leaved'
				},
				config.states
			)
		});
	}

	public dispose() {
		this.destroy?.();
	}

	public enter(parameters?: unknown): Promise<boolean> {
		return new Promise((resolve) => {
			this.destroy?.();

			this.update('enter');

			this.config.onEnter?.(parameters);

			this.next(() => {
				this.update('entering');

				this.config.onEntering?.(parameters);

				const onCancel = () => {
					resolve(true);
				};

				const onFinish = () => {
					this.update('entered');

					this.config.onEntered?.(parameters);

					resolve(false);
				};

				if (!this.animation) return onFinish();

				this.destroy = () => {
					resolve(true);

					this.animation?.removeEventListener('cancel', onCancel);
					this.animation?.removeEventListener('finish', onFinish);
				};

				this.animation.addEventListener('cancel', onCancel, { once: true });
				this.animation.addEventListener('finish', onFinish, { once: true });
			});
		});
	}

	public initialize(state?: AnimationState) {
		this.update(state);
	}

	public leave(parameters?: unknown): Promise<boolean> {
		return new Promise((resolve) => {
			this.destroy?.();

			this.update('leave');

			this.config.onLeave?.(parameters);

			this.next(() => {
				this.update('leaving');

				this.config.onLeaving?.(parameters);

				const onCancel = () => {
					resolve(true);
				};

				const onFinish = () => {
					this.update('leaved');

					this.config.onLeaved?.(parameters);

					resolve(false);
				};

				if (!this.animation) return onFinish();

				this.destroy = () => {
					resolve(true);

					this.animation?.removeEventListener('cancel', onCancel);
					this.animation?.removeEventListener('finish', onFinish);
				};

				this.animation.addEventListener('cancel', onCancel, { once: true });
				this.animation.addEventListener('finish', onFinish, { once: true });
			});
		});
	}

	private next(callback) {
		requestAnimationFrame(() => setTimeout(() => callback(), 5));
	}

	private update(state: AnimationState) {
		this.state = state;

		const value = this.config.states[this.state];

		this.target.setAttribute(this.config.key, value);
	}
}
