import { Element, Property } from '@htmlplus/element';

import { DUMMY_RESOURCES } from './dummy.constants';
import { DummyType } from './dummy.types';

/**
 * TODO
 */
@Element()
export class Dummy {
  /**
   * TODO
   */
  @Property()
  paragraph?: number = 1;

  /**
   * TODO
   */
  @Property()
  seed?: 'random' | number = 'random';

  /**
   * TODO
   */
  @Property()
  type?: DummyType = 'lorem';

  render() {
    DUMMY_RESOURCES;
    return <slot />;
  }
}
