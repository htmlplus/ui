import './portal.css';
import { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from "@htmlplus/react";
import { useState } from 'react';

const Portal = () => {

  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return <>
    <div className="center">
      <PlusDialogToggler connector="dialog-animation">
        Open
      </PlusDialogToggler>
    </div>
    <PlusDialog portal portalTarget="#root" animation="fade" connector="dialog-animation">
      <PlusDialogContent>
        <PlusDialogHeader>
          Dialog Title
        </PlusDialogHeader>
        <PlusDialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </PlusDialogBody>
        <PlusDialogFooter>
          <button onClick={increase}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <PlusDialogToggler>
            Close
          </PlusDialogToggler>
        </PlusDialogFooter>
      </PlusDialogContent>
    </PlusDialog>
  </>
}

export default Portal;
