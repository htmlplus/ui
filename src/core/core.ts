import { Bind, Host, State, direction, isRTL } from '@htmlplus/element';

export class PlusCore {
  static experimentalBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  };

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
