import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../tabs/context';
/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsPanel extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    parent?: Context;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusTabsPanelAttributesBase {
  /**
  * Provides your own value.
  */
  "value"?: string;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusTabsPanelVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelProperties, "overrides">>;
}
export interface PlusTabsPanelAttributesDisables {}
export type PlusTabsPanelAttributes = Filter<PlusTabsPanelAttributesBase, PlusTabsPanelAttributesDisables>;
export interface PlusTabsPanelEventsBase {}
export interface PlusTabsPanelEventsDisables {}
export type PlusTabsPanelEvents = Filter<PlusTabsPanelEventsBase, PlusTabsPanelEventsDisables>;
export interface PlusTabsPanelMethodsBase {}
export interface PlusTabsPanelMethodsDisables {}
export type PlusTabsPanelMethods = Filter<PlusTabsPanelMethodsBase, PlusTabsPanelMethodsDisables>;
export interface PlusTabsPanelPropertiesBase {
  /**
  * Provides your own value.
  */
  value?: string;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusTabsPanelVariantOverrides>;
  /**
  * TODO
  */
  active;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelProperties, "overrides">>;
}
export interface PlusTabsPanelPropertiesDisables {}
export type PlusTabsPanelProperties = Filter<PlusTabsPanelPropertiesBase, PlusTabsPanelPropertiesDisables>;
export interface PlusTabsPanelJSX extends PlusTabsPanelEvents, PlusTabsPanelProperties {}
declare global {
  interface HTMLPlusTabsPanelElement extends HTMLElement, PlusTabsPanelMethods, PlusTabsPanelProperties {}
  var HTMLPlusTabsPanelElement: {
    prototype: HTMLPlusTabsPanelElement;
    new (): HTMLPlusTabsPanelElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panel": HTMLPlusTabsPanelElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-panel": PlusTabsPanelAttributes & PlusTabsPanelEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelAttributes & PlusTabsPanelEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsPanelElement>, HTMLPlusTabsPanelElement>, keyof (PlusTabsPanelAttributes & PlusTabsPanelEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelAttributes & PlusTabsPanelEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelElement>, keyof (PlusTabsPanelAttributes & PlusTabsPanelEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelAttributes & PlusTabsPanelEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelElement>, keyof (PlusTabsPanelAttributes & PlusTabsPanelEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelAttributes & PlusTabsPanelEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelElement>, keyof (PlusTabsPanelAttributes & PlusTabsPanelEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelAttributes & PlusTabsPanelEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelElement>, keyof (PlusTabsPanelAttributes & PlusTabsPanelEvents)>;
    }
  }
}
export type PlusTabsPanelElement = globalThis.HTMLPlusTabsPanelElement;
export interface PlusTabsPanelVariantOverrides {}