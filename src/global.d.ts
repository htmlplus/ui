/// <reference types="vite/client" />
import '@types/react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    part?: string;
  }
  interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    part?: string;
  }
  namespace JSX {
    // interface IntrinsicElements {
    //   host: React.DetailedHTMLProps<Omit<React.HTMLAttributes<HTMLElement>, 'part'>, HTMLElement>;
    // }
  }
}

export {};
