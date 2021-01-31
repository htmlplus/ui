import * as Utils from '@app/utils';

export class OutsideClick {

    static targets = new Map();

    static add(element, callback, self = true) {

        this.remove(element);

        const fn = (event) => {

            const path = Utils.eventPath(event);

            const index = path.findIndex((item) => item === element);

            if ((!self && 1 < index) || (self && index !== -1)) return;

            callback(event);
        }

        document.addEventListener('click', fn, true);

        this.targets.set(element, fn);
    }

    static remove(element) {

        const callback = this.targets.get(element);

        if (!callback) return;

        document.removeEventListener('click', callback, true);

        this.targets.delete(element);
    }
}