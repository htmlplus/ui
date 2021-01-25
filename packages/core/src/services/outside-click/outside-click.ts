import * as Utils from '@app/utils';

export class OutsideClick {

    static targets = new Map();

    static add(element, callback) {

        this.remove(element);

        const fn = (event) => {

            const path = Utils.eventPath(event);

            const index = path.findIndex((item) => item === element);

            if (1 < index) return;

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