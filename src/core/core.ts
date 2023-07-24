import { Host, direction, isRTL } from '@htmlplus/element';

export class PlusCore {
    @Host()
    $host!: HTMLElement;

    // TODO
    get dir() {
        return direction(this);
    }

    get isRTL() {
        return isRTL(this);
    }
}