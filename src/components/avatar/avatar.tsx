import { Element, Property } from '@htmlplus/element';

@Element()
export class Avatar {
  /**
   * TODO
   */
  @Property({ reflect: true })
  shape?: 'circle' | 'round' | 'tile' = 'round';

  /**
   * TODO
   */
  @Property({ reflect: true })
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';

  render() {
    return <slot />;
  }
}
