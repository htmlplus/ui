export type AttachStrategy = 'before' | 'prepend' | 'append' | 'after';
export type AttachTarget = string | Node;

export class Attach {

    static keys = new Map<Node, Node>();

    static to(source: Node, target: AttachTarget, strategy: AttachStrategy) {

        const place = document.createElement('div');

        this.keys.set(source, place);

        if (typeof target === 'string') target = document.querySelector(target);

        source['before'](place);

        target[strategy](source);
    }

    static reset(source: Node) {

        if (!this.keys.has(source)) return;

        const place = this.keys.get(source);

        place.parentNode.replaceChild(source, place);

        this.keys.delete(source);
    }
}