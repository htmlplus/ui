import { useState } from 'react';
import { Dialog as PlusDialog } from '@htmlplus/react';
import type { JSX } from '@htmlplus/core';
import { createProxy } from './proxy';

const Dialog = createProxy<JSX.PlusDialog, HTMLPlusDialogElement>('plus-dialog', ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);

const Port = () => {

  const [open, setOpen] = useState(false);

  return <>
    <button onClick={() => setOpen(true)}>
      open
  </button>
    <button onClick={() => setOpen(false)}>
      close
    </button>
    <Dialog open={open} onPlusClosed={() => setOpen(false)}>
      <div>
        1
      </div>
    </Dialog>
    {/* <PlusDialog open={open} onClosed={() => setOpen(false)}>
      <div>
        2
      </div>
    </PlusDialog> */}
  </>
}

export default Port;