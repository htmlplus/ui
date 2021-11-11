import * as Helpers from '@app/helpers';

export class ClickOutside {

    static targets = new Map();

    static get type() {
        return 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    }

    static on(element, callback, self = true) {

        this.off(element);

        const fn = (event) => {

            const path = Helpers.eventPath(event);

            const index = path.findIndex((item) => item === element);

            if ((!self && 1 < index) || (self && index !== -1)) return;

            callback(event);
        }

        Helpers.on(document, this.type, fn, true);

        this.targets.set(element, fn);
    }

    static off(element) {

        const callback = this.targets.get(element);

        if (!callback) return;

        Helpers.off(document, this.type, callback, true);

        this.targets.delete(element);
    }
}