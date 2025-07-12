import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
export declare class Switch extends PlusCore {
    /**
     * Puts the switch in checked state.
     * @model
     */
    checked?: boolean;
    /**
     * Disables the switch.
     */
    disabled?: boolean;
    /**
     * When the switch state is changed this event triggers.
     * @model
     */
    plusChange: EventEmitter<void>;
    toggle(): void;
    onClick(event: any): void;
    onKeyDown(event: any): void;
    render(): any;
}

export interface SwitchAttributes {
  /**
  * Puts the switch in checked state.
  * @model
  */
  "checked"?: boolean;
  /**
  * Disables the switch.
  */
  "disabled"?: boolean;
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<SwitchProperties>;
  };
}
export interface SwitchEvents {
  /**
  * When the switch state is changed this event triggers.
  * @model
  */
  onPlusChange?: (event: CustomEvent<void>) => void;
}
export interface SwitchMethods {}
export interface SwitchProperties {
  /**
  * Puts the switch in checked state.
  * @model
  */
  checked?: boolean;
  /**
  * Disables the switch.
  */
  disabled?: boolean;
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<SwitchProperties>;
  };
}
export interface SwitchJSX extends SwitchEvents, SwitchProperties {}
declare global {
  interface HTMLPlusSwitchElement extends HTMLElement, SwitchMethods, SwitchProperties {}
  var HTMLPlusSwitchElement: {
    prototype: HTMLPlusSwitchElement;
    new (): HTMLPlusSwitchElement;
  };
  interface HTMLElementTagNameMap {
    "plus-switch": HTMLPlusSwitchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": SwitchEvents & SwitchAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": SwitchEvents & SwitchAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type SwitchElement = globalThis.HTMLPlusSwitchElement;