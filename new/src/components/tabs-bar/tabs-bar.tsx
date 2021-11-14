import { Attributes, Component, GlobalConfig, Property } from '@app/decorators';

/**
 * TODO: Arranges tabs within a bar.
 * @slot default - The default slot.
 */
@Component()
export class TabsBar {

  /**
   * Grows tabs as much as all available space (occupies all horizontal space).
   */
  @Property({ reflect: true })
  grow?: boolean;

  /**
   * Specifies how the tabs are aligned.
   */
  @Property({ reflect: true })
  justify?: 'start' | 'center' | 'end' = 'start';

  /**
   * Reverses the arrangement of the tabs.
   */
  @Property({ reflect: true })
  reverse?: boolean;

  @GlobalConfig('tabsBar', {
    justify: 'start'
  })
  config?;

  @Attributes()
  get attributes() {
    return {
      'role': 'tablist'
    }
  }

  render() {
    return (
      <slot />
    )
  }
}
