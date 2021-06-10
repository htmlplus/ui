import { useState } from 'react';
import { Dialog } from '@htmlplus/react';

const Port = () => {

  const [open, setOpen] = useState(false);

  return <>
    <button onClick={() => setOpen(true)}>
      open
  </button>
    <button onClick={() => setOpen(false)}>
      close
    </button>
    <Dialog.Toggler connector="a">

    </Dialog.Toggler>
    <Dialog connector="a" open={open} onClosed={() => setOpen(false)} >
      <Dialog.Content scrollable>
        <Dialog.Body scrollable>
          asdfsdf
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
    {/* <PlusDialog open={open} onClosed={() => setOpen(false)}>
      <div>
        2
      </div>
    </PlusDialog> */}
  </>
}

export default Port;