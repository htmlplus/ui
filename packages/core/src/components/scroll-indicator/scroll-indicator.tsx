import {Component, Event, EventEmitter, Element, Prop, Listen, Host, h} from '@stencil/core';
import {ScrollIndicatorDirection} from '@app/components/scroll-indicator/scroll-indicator.types';

/*
* With this component, you can build a progress bar displaying how far a user has scroll down the page or tag
*/

@Component({
  tag: 'plus-scroll-indicator',
  styleUrl: 'scroll-indicator.scss',
  shadow: true
})

export class ScrollIndicator {
  /**
   * Disable event
   */
  @Prop()
  disabled: boolean;

  /**
   * Scroll vertical or horizontal
   */
  @Prop()
  scrollDirection: ScrollIndicatorDirection = 'vertical';

  /**
   * When the children is scrolled this event trigger,
   */
  @Event({
    bubbles: true,
    cancelable: true
  })
  scrolled: EventEmitter<number>;

  @Element()
  $host!: HTMLElement;

  @Listen('scroll', {target: "document"})
  handleScroll() {
    if (this.scrollDirection === 'horizontal')
      this.horizontalScroll();
    else
      this.verticalScroll();
  }

  /**
   * Events handler
   */

  horizontalScroll() {
    const windowScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
    const height = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    const percentage = (windowScroll / height) * 100;
    this.scrolled.emit(percentage);
  }

  verticalScroll() {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = (windowScroll / height) * 100;
    this.scrolled.emit(percentage);
  }

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    )
  }
}
