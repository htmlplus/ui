import { Host, direction, isRTL } from '@htmlplus/element';

export class PlusBase {
    @Host()
    $host!: HTMLElement;

    get direction() {
        return direction(this);
    }

    get isRTL() {
        return isRTL(this);
    }
}