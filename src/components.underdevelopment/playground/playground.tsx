import { Element, Property, host } from '@htmlplus/element';

import { PlaygroundReferences } from './playground.types';

// TODO
// Properties/Attributes
// Events
// Methods
// CSS Variables
// Parts
// Slots

/**
 * TODO
 * @slot default - The default slot.
 */
@Element()
export class Playground {
  /**
   * TODO
   */
  @Property()
  properties?: any[] = [];

  /**
   * TODO
   */
  @Property()
  references?: PlaygroundReferences = 'child';

  get $host() {
    return host(this);
  }

  get $references() {
    return [this.references].flat().map((reference) => {
      if (typeof reference != 'string') return reference;

      const query = reference == 'child' ? '*' : reference;

      return this.$host.querySelector(query);
    });
  }

  render() {
    return (
      <main>
        <header>header</header>
        <section>
          <slot />
        </section>
        <aside>
          <button
            onClick={() => {
              console.log(11, this.$references);
              this.$references[0]['size'] = 'lg';
            }}
          >
            size
          </button>
        </aside>
      </main>
    );
  }
}
