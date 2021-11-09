import { addEventListener, removeEventListener, eventPath } from '@app/helpers';

export class ClickOutside {

    static targets = new Map();

    static get type() {
        return 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    }

    static add(element, callback, self = true) {

        this.remove(element);

        const fn = (event) => {

            const path = eventPath(event);

            const index = path.findIndex((item) => item === element);

            if ((!self && 1 < index) || (self && index !== -1)) return;

            callback(event);
        }

        addEventListener(document, this.type, fn, true);

        this.targets.set(element, fn);
    }

    static remove(element) {

        const callback = this.targets.get(element);

        if (!callback) return;

        removeEventListener(document, this.type, callback, true);

        this.targets.delete(element);
    }
}