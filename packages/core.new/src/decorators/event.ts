export type EventEmitter<T = any> = (data?: T) => CustomEvent<T>;

export interface EventOptions {
    /**
     * A string custom event name to override the default.
     */
    eventName?: string;
    /**
     * A Boolean indicating whether the event bubbles up through the DOM or not.
     */
    bubbles?: boolean;
    /**
     * A Boolean indicating whether the event is cancelable.
     */
    cancelable?: boolean;
    /**
     * A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.
     */
    composed?: boolean;
}

export function Event<T = any>(options: EventOptions = {}) {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            get() {
                return (data: T): CustomEvent<T> => {

                    const eventName = options.eventName || propertyKey;

                    delete options.eventName;

                    const event = new CustomEvent(
                        eventName,
                        {
                            ...options,
                            detail: data
                        }
                    );

                    const element = this.$api?.host();

                    element.dispatchEvent(event);

                    return event;
                }
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}
