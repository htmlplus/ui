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
    <Dialog open={open} onClosed={() => setOpen(false)}>
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