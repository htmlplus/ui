import { Element, Property } from '@htmlplus/element';

/**
 * @slot default - The default slot.
 */
@Element()
export class AvatarGroup {
  /**
   * TODO
   */
  @Property({ reflect: true })
  hoverable?: boolean;

  /**
   * TODO
   */
  @Property({ reflect: true })
  stacked?: boolean;

  render() {
    return <slot />;
  }
}
