import './App.css';
import { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from "@htmlplus/react";

const App = () => {
  return <>    
    <div className="center">      
      <PlusDialogToggler connector="dialog-animation">
        Open
      </PlusDialogToggler>      
    </div>    
    <PlusDialog animation="fade" connector="dialog-animation">      
      <PlusDialogContent>        
        <PlusDialogHeader>
          Dialog Title
        </PlusDialogHeader>        
        <PlusDialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </PlusDialogBody>        
        <PlusDialogFooter>          
          <PlusDialogToggler>
            Close
          </PlusDialogToggler>          
        </PlusDialogFooter>        
      </PlusDialogContent>      
    </PlusDialog>    
  </>;
};

export default App;
