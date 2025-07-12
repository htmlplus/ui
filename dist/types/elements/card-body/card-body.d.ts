import { PlusCore } from '../../core';
/**
 * @development
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class CardBody extends PlusCore {
    render(): any;
}

export interface CardBodyAttributes {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<CardBodyProperties>;
  };
}
export interface CardBodyEvents {}
export interface CardBodyMethods {}
export interface CardBodyProperties {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<CardBodyProperties>;
  };
}
export interface CardBodyJSX extends CardBodyEvents, CardBodyProperties {}
declare global {
  interface HTMLPlusCardBodyElement extends HTMLElement, CardBodyMethods, CardBodyProperties {}
  var HTMLPlusCardBodyElement: {
    prototype: HTMLPlusCardBodyElement;
    new (): HTMLPlusCardBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card-body": HTMLPlusCardBodyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": CardBodyEvents & CardBodyAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": CardBodyEvents & CardBodyAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type CardBodyElement = globalThis.HTMLPlusCardBodyElement;