import { Attributes, Element, Property } from '@htmlplus/element';
import { DividerSize, DividerType } from './divider.types';

/**
 */
@Element()
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

  @Attributes()
  get attributes() {
    return {
      'role': 'separator',
      'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
    }
  }

  // get Classes() {
  //   return {
  //     'root': true,
  //     [direction(this)]: true,
  //   }
  // }

  // get hasBefore() {
  //   return Helper.fromAxis(this.placement, host(this)) !== 'start';
  // }

  // get hasAfter() {
  //   return Helper.fromAxis(this.placement, host(this)) !== 'end';
  // }

  // render() {
  //   return (
  //       {/* TODO */}
  //       {/* <div class={this.classes}>
  //         {this.hasBefore && (
  //           <div class="before" />
  //         )}
  //         <div class="content">
  //           <slot />
  //         </div>
  //         {this.hasAfter && (
  //           <div class="after" />
  //         )}
  //       </div> */}
  //   )
  // }
}
