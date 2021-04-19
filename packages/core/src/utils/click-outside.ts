import { Helper } from '@app/utils';

export class ClickOutside {

    static targets = new Map();

    static get type() {
        return 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    }

    static add(element, callback, self = true) {

        this.remove(element);

        const fn = (event) => {

            const path = Helper.eventPath(event);

            const index = path.findIndex((item) => item === element);

            if ((!self && 1 < index) || (self && index !== -1)) return;

            callback(event);
        }

        document.addEventListener(this.type, fn, true);

        this.targets.set(element, fn);
    }

    static remove(element) {

        const callback = this.targets.get(element);

        if (!callback) return;

        document.removeEventListener(this.type, callback, true);

        this.targets.delete(element);
    }
}