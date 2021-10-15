import { Attributes, Component, Property, State, Watch } from '@app/decorators';
import { createLink } from '@app/services';

const { Inject, reconnect } = createLink('Toast');

/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Component()
export class ToastToggler {

  /**
   * This property helps you to attach which toast this toggler controls. 
   * It doesn't matter where the toast toggler is. 
   * You can put the toast's toggler inside or outside of the toast. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Property()
  connector?: string;

  @Inject()
  toggle?: Function = () => console.log('TODO: can not use out of toast');

  @Inject()
  @State()
  tunnel?: boolean;

  @Attributes()
  get attributes() {
    return {
      'role': 'button',
      'state': this.tunnel ? 'open' : 'close',
      'onClick': () => this.toggle()
    }
  }

  get text() {
    return this.tunnel ? 'Close' : 'Open';
  }

  /**
   * Watchers
   */

  @Watch('connector')
  watcher(next, prev, name) {
    reconnect(this);
  }

  render() {
    return (
      <slot>
        {this.text}
      </slot>
    )
  }
}

// TODO
// <slot name="close" />
// <slot name="open" />
