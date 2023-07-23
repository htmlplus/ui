import { Host, direction, isRTL } from '@htmlplus/element';

export class PlusBase {
    @Host()
    $host!: HTMLElement;

    get dir() {
        return direction(this);
    }

    get isRTL() {
        return isRTL(this);
    }
}