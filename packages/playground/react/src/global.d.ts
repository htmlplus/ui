import { JSX as LocalJSX } from '@htmlplus/react/loader';
import { HTMLAttributes } from 'react';

type ToReact<T> = {
    [P in keyof T]?: T[P] & HTMLAttributes<Element> & {
        className?: string;
    };
};

declare global {
    export namespace JSX {
        interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements> { }
    }
}