import * as Helpers from '@app/helpers';

export type AnimationReflect = 'attribute' | 'class';

export type AnimationState = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';

export type AnimationElement = HTMLElement | Array<HTMLElement> | any; // TODO

export interface AnimationConfig {
    key?: string;
    source?: AnimationElement;
    target?: AnimationElement;
    state?: AnimationState,
    states?: {
        [key in AnimationState]?: string
    },
    onEnter?: () => void;
    onEntering?: () => void;
    onEntered?: () => void;
    onEnterCanceled?: () => void;
    onLeave?: () => void;
    onLeaving?: () => void;
    onLeaved?: () => void;
    onLeaveCanceled?: () => void;
}

export class Animation {

    private config: AnimationConfig;

    private timeout;

    constructor(config: AnimationConfig) {

        const states = Object.assign(
            {},
            {
                enter: 'enter',
                entering: 'entering',
                entered: 'entered',
                leave: 'leave',
                leaving: 'leaving',
                leaved: 'leaved',
            },
            config.states
        );

        this.config = Object.assign(
            {},
            {
                reflect: 'class',
                states,
                onEnter: () => undefined,
                onEntering: () => undefined,
                onEntered: () => undefined,
                onEnterCanceled: () => undefined,
                onLeave: () => undefined,
                onLeaving: () => undefined,
                onLeaved: () => undefined,
                onLeaveCanceled: () => undefined,
            },
            config
        );

        this.init();
    }

    private get sources() {

        let { source } = this.config;

        try {
            source = source();
        }
        catch { }

        return [source].flat(1);
    }

    private get targets() {

        let { target } = this.config;

        try {
            target = target();
        }
        catch { }

        return [target].flat(1);
    }

    private duration() {

        return this.sources
            .map((item) => {

                try {

                    const style = Helpers.getComputedStyle(item);

                    const duration = [
                        style.animationDelay,
                        style.transitionDelay,
                        style.animationDuration,
                        style.transitionDuration,
                    ]
                        .map((item = '0s') => parseFloat(item) * (/ms/g.test(item) ? 1 : 1000));

                    return Math.max(...duration.slice(0, 2)) + Math.max(...duration.slice(2));
                }
                catch {
                    return 0;
                }
            })
            .sort((a, b) => a - b)
            .pop();
    }

    private init() {

        let { state } = this.config;

        this.update(state);
    }

    private next(callback) {
        requestAnimationFrame(() => setTimeout(() => callback(), 5));
    }

    private update(state: AnimationState) {

        const { key, states } = this.config;

        this.targets.map((target) => target.setAttribute(key, states[state]));
    }

    public cancel() {
        clearTimeout(this.timeout);
    }

    public dispose() {
        clearTimeout(this.timeout);
    }

    public enter(config?: AnimationConfig) {

        this.cancel();

        config = Object.assign({}, this.config, config);

        this.update('enter');

        config.onEnter();

        this.next(() => {

            clearTimeout(this.timeout);

            this.update('entering');

            config.onEntering();

            const duration = this.duration();

            this.timeout = setTimeout(() => {

                this.update('entered');

                config.onEntered();
            }, duration);
        })
    }

    public leave(config?: AnimationConfig) {

        this.cancel();

        config = Object.assign({}, this.config, config);

        this.update('leave');

        config.onLeave();

        this.next(() => {

            clearTimeout(this.timeout);

            this.update('leaving');

            config.onLeaving();

            const duration = this.duration();

            this.timeout = setTimeout(() => {

                this.update('leaved');

                config.onLeaved();
            }, duration);
        })
    }
}