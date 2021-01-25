export class Scrollbar {

    static keys = new Set<any>();

    static style = {};

    static get isRTL() {
        return getComputedStyle(window.document.body).getPropertyValue('direction') === 'rtl';
    }

    static get width() {

        const div = document.createElement('div');

        div.style.position = 'absolute';
        div.style.top = '-9999px';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';

        document.body.appendChild(div);

        const width = div.getBoundingClientRect().width - div.clientWidth;

        document.body.removeChild(div);

        return width;
    }

    static remove(key: any) {

        this.keys.add(key);

        if (this.keys.size > 1) return;

        const rect = document.body.getBoundingClientRect();

        const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;

        if (!isOverflowing) return;

        const property = this.isRTL ? 'paddingLeft' : 'paddingRight';

        this.style = {
            overflow: document.body.style.overflow,
            [property]: document.body.style[property],
        };

        document.body.style.overflow = 'hidden';

        const scrollbarWidth = this.width;

        document.body.style[property] = `${scrollbarWidth}px`;
    }

    static reset(key: any) {

        this.keys.delete(key);

        if (this.keys.size) return;

        const keys = Object.keys(this.style);

        for (let i = 0; i < keys.length; i++) {

            const key = keys[i];

            document.body.style[key] = this.style[key];
        }

        this.style = {};
    }
}