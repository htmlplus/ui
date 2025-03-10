import { Consumer, Element, Listen, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { ScrollSpyContext } from '../scroll-spy/scroll-spy.context';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class ScrollSpyTarget extends PlusCore {
  /**
   * TODO
   */
  @Property()
  connector?: string;

  /**
   * TODO
   */
  @Property()
  smoothScroll?: boolean;

  /**
   * TODO
   */
  @Property()
  keySelector?: string;

  /**
   * TODO
   */
  @Property()
  keyProperty?: string = 'id';

  /**
   * TODO
   */
  @Property()
  typeSelector?: string;

  /**
   * TODO
   */
  @Property()
  typeProperty?: string;

  /**
   * TODO
   */
  @Property()
  valueSelector?: string;

  /**
   * TODO
   */
  @Property()
  valueProperty?: string = 'innerHTML';

  @State()
  @Consumer('scrollSpy.connector')
  parent?: ScrollSpyContext;

  TODO($element: HTMLElement, selector?: string, property?: string, fallback?: string) {
    if (!property) return fallback;

    const $target = selector ? $element.querySelector(selector) : $element;

    if (!$target) return fallback;

    return $target[property] ?? fallback;
  }

  getKey($element: HTMLElement) {
    return this.TODO($element, this.keySelector, this.keyProperty, 'NO KEY FOUND');
  }

  getType($element: HTMLElement) {
    return this.TODO($element, this.typeSelector, this.typeProperty, '');
  }

  getValue($element: HTMLElement) {
    return this.TODO($element, this.valueSelector, this.valueProperty, 'NO VALUE FOUND');
  }

  getPart($element: HTMLElement) {
    return [
      'anchor',
      this.getType($element),
      $element === this.parent?.current ? 'active' : 'inactive'
    ]
      .filter(Boolean)
      .join(' ');
  }

  @Listen('click')
  onClick(event: MouseEvent) {
    if (!this.smoothScroll) return;

    const $anchor = event.composedPath().find(($element: HTMLAnchorElement) => {
      return $element.localName === 'a' && $element.hash.startsWith('#');
    }) as HTMLAnchorElement;

    if (!$anchor) return;

    const id = $anchor.hash.slice(1);

    const $element = this.parent?.elements.find(($element) => $element.id === id);

    if (!$element) return;

    event.preventDefault();

    $element.scrollIntoView({ behavior: 'smooth' });

    // TODO
    // const root = this._rootElement || window
    // const height = observableSection.offsetTop - this._element.offsetTop
    // root.scrollTo({ top: height, behavior: 'smooth' })
  }

  render() {
    return (
      <slot>
        {this.parent?.elements?.map(($element) => (
          <a href={`#${this.getKey($element)}`} part={this.getPart($element)}>
            {this.getValue($element)}
          </a>
        ))}
      </slot>
    );
  }
}
