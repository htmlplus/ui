import { Bind, Host, State, direction, isRTL } from '@htmlplus/element';

import { setConfig } from '@/config';
import { BREAKPOINTS } from '@/constants';

setConfig({
  breakpoints: BREAKPOINTS
});

export class PlusCore {
  @Host()
  $host!: HTMLElement;

  @State()
  tick?: number;

  // TODO
  get dir(): 'ltr' | 'rtl' {
    return direction(this) as any;
  }

  get isRTL() {
    return isRTL(this);
  }

  @Bind()
  forceUpdate() {
    this.tick = Math.random();
  }
}
