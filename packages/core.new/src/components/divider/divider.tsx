import { Attributes, Component, Direction, GlobalConfig, IsRTL, Property } from '@app/decorators';
import { DividerSize, DividerType } from './divider.types';

/**
 */
@Component()
export class Divider {

  /**
   * TODO
   */
  // @Property({ reflect: true })
  // placement?: DividerPlacement = 'center';

  /**
   * Determines the width of the divider.
   */
  @Property({ reflect: true })
  size?: DividerSize = 'md';

  /**
   * Specifies different divider styles.
   */
  @Property({ reflect: true })
  type?: DividerType = 'solid';

  /**
   * TODO
   */
  // @Property({ reflect: true })
  // variant?: DividerVariant = 'full';

  /**
   * You can use vertical property for vertical division.
   */
  @Property({ reflect: true })
  vertical?: boolean;

  @GlobalConfig('divider', {
    // placement: 'center',
    size: 'md',
    type: 'solid',
    variant: 'full',
  })
  config?;

  @Direction()
  direction;

  @IsRTL()
  isRTL: boolean;

  @Attributes()
  get attributes() {
    return {
      'role': 'separator',
      'aria-orientation': this.orientation,
    }
  }

  // @Class()
  // get Classes() {
  //   return {
  //     'root': true,
  //     [this.direction]: true,
  //   }
  // }

  // get hasBefore() {
  //   return Helper.fromAxis(this.placement, this.isRTL) !== 'start';
  // }

  // get hasAfter() {
  //   return Helper.fromAxis(this.placement, this.isRTL) !== 'end';
  // }

  get orientation() {
    return this.vertical ? 'vertical' : 'horizontal';
  }

  render() {
    return (
      <>
        {/* TODO */}
        {/* <div class={this.classes}>
          {this.hasBefore && (
            <div class="before" />
          )}
          <div class="content">
            <slot />
          </div>
          {this.hasAfter && (
            <div class="after" />
          )}
        </div> */}
      </>
    )
  }
}
