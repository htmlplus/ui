/// <reference types="vite/client" />
declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: { part?: string } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}

export {};
