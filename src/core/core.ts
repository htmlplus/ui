import { Bind, Host, State, direction, isRTL } from '@htmlplus/element';

export class PlusCore {
  @Host()
  $host!: HTMLElement;

  @State()
  tick1?: number;

  // TODO
  get dir(): 'ltr' | 'rtl' {
    return direction(this) as any;
  }

  get isRTL() {
    return isRTL(this);
  }

  @Bind()
  forceUpdate() {
    this.tick1 = Math.random();
  }
}
