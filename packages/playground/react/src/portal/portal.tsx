import { useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogToggler,
} from '@htmlplus/react';
import './portal.css';

const Portal = () => {

  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return <>
    <div className="center">
      <DialogToggler connector="dialog-animation">
        Open
      </DialogToggler>
    </div>
    <Dialog portal portalTarget="#root" animation="fade" connector="dialog-animation">
      <DialogContent>
        <DialogHeader>
          Dialog Title
        </DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </DialogBody>
        <DialogFooter>
          <button onClick={increase}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <DialogToggler>
            Close
          </DialogToggler>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </>
}

export default Portal;
