/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      host: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { [key: string]: any },
        HTMLElement
      >;
    }
  }
}

export {};
