import { useState } from 'react';
import { Dialog as PlusDialog } from '@htmlplus/react';
import type { JSX } from '@htmlplus/core';
import { proxy } from './proxy';

const Dialog = proxy<JSX.PlusDialog, HTMLPlusDialogElement>('plus-dialog', ['onPlusClose', 'onPlusClosed', 'onPlusOpen', 'onPlusOpened']);

const Port = () => {

  const [open, setOpen] = useState(false);

  return <>
    <button onClick={() => setOpen(true)}>
      open
    </button>
    <Dialog open={open} onPlusClosed={() => setOpen(false)}>
      <div>
        ssssssssss
      </div>
    </Dialog>
    <PlusDialog></PlusDialog>
  </>
}

export default Port;
