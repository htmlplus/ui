import { Host, direction, isRTL } from '@htmlplus/element';

export class PlusCore {
    @Host()
    $host!: HTMLElement;

    // TODO
    get dir(): 'ltr' | 'rtl' {
        return direction(this) as any;
    }

    get isRTL() {
        return isRTL(this);
    }
}