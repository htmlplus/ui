import React, { useEffect, useState } from 'react';
import { Dialog as PlusDialog } from '@htmlplus/react';
import type { JSX } from '@htmlplus/core';

const dashToPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
}

interface StencilReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

const proxy = <PropType, ElementType /*extends HTMLStencilElement*/>(tagName: string) => {

  const displayName = dashToPascalCase(tagName);

  const C: React.FC<any> = (props) => {

    const { children, ...a } = props;

    const newProps = { ...a };

    useEffect(() => {

      return () => {

      }
    }, []);

    return React.createElement(tagName, newProps, children);
  }

  return C;
}

const Dialog = proxy<JSX.PlusDialog, HTMLPlusDialogElement>('plus-dialog');

const Port = () => {

  const [open, setOpen] = useState(false);

  return <>
    <button onClick={() => setOpen(true)}>
      open
    </button>
    <Dialog open={open}>
      <div>
        ssssssssss
      </div>
    </Dialog>
    <PlusDialog></PlusDialog>
  </>
}

export default Port;
