export type PortalStrategy = 'before' | 'prepend' | 'append' | 'after';

export type PortalSource = Node | Array<Node>;

export type PortalTarget = string | Node;

export interface PortalOptions {
    source?: PortalSource;
    target?: PortalTarget;
    strategy?: PortalStrategy;
}

export class Portal {

    private keys = new Map<Node, Node>();

    constructor(private options: PortalOptions) {
        this.init();
    }

    get source() {
        return [this.options.source].flat();
    }

    get strategy() {
        return this.options.strategy;
    }

    get target() {

        let target = this.options.target;

        if (typeof target === 'string') target = document.querySelector(target);

        return target;
    }

    private init() {

        for (let i = 0; i < this.source.length; i++) {

            const node = this.source[i];

            const place = document.createElement('div');

            this.keys.set(node, place);

            node['before'](place);

            this.target[this.strategy](node);
        }
    }

    public revert() {

        for (let i = 0; i < this.source.length; i++) {

            const node = this.source[i];

            if (!this.keys.has(node)) continue;

            const place = this.keys.get(node);

            place.parentNode.replaceChild(node, place);

            this.keys.delete(node);
        }
    }
}