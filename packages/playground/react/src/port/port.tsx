import { useState } from 'react';
import { Dialog } from '@htmlplus/react/dist/components/dialog';
// import { Drawer } from '@htmlplus/react/dist/components/drawer';
import { Spinner } from '@htmlplus/react/dist/components/spinner';

const Port = () => {

  const [open, setOpen] = useState(false);

  return <>
    <Spinner type="ring" />
    {/* <Grid alignItemsLg="center" justifyContentLg={open ? 'end' : 'start'}>
      <Grid.Item>

      </Grid.Item>
    </Grid> */}
    {/*<Drawer temporary="on-breakpoint">
      <Drawer.Toggler>

      </Drawer.Toggler>
    </Drawer> */}
    <button onClick={() => setOpen(true)}>
      open
    </button>
    <button onClick={() => setOpen(false)}>
      close
    </button>
    <Dialog.Toggler connector="a">

    </Dialog.Toggler>
    <Dialog animation="fade" connector="a" >
      <Dialog.Content scrollable>
        <Dialog.Body scrollable>
          asdfsdf
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
    <Dialog open={open} onClosed={() => setOpen(false)}>
      <div>
        2
      </div>
    </Dialog> 
  </>
}

export default Port;