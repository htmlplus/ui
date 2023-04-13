import { Element, Property } from '@htmlplus/element';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class AvatarGroup {
  /**
   * Specifies whether to prominent the avatar when the mouse is entered or not.
   */
  @Property({ reflect: true })
  hoverable?: boolean;

  /**
   * Specifies whether avatars should be displayed compressed or not.
   */
  @Property({ reflect: true })
  stacked?: boolean;

  render() {
    return <slot />;
  }
}
