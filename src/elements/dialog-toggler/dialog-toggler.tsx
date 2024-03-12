import { Consumer, Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { DialogContext } from '../dialog/dialog.context';

/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Element()
export class DialogToggler extends PlusCore {
  /**
   * This property helps you to attach which dialog this toggler controls.
   * It doesn't matter where the dialog toggler is.
   * You can put the dialog's toggler inside or outside of the dialog.
   * Read more about connectors [here](/connector).
   */
  @Property()
  connector?: string;

  @State()
  @Consumer('dialog.connector')
  dialog?: DialogContext;

  render() {
    return (
      <host
        role="button"
        state={this.dialog?.open ? 'open' : 'close'}
        onClick={this.dialog?.toggle}
      >
        <slot>{this.dialog?.open ? 'Close' : 'Open'}</slot>
      </host>
    );
  }
}

// TODO
// <slot name="close" />
// <slot name="open" />
