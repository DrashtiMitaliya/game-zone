import './App.css';
import {Selector} from './component/Common/Selector'
import { UserView } from './component/Common/UserView';


function App() {
  /* Returning the JSX code to the browser. */
  return (
    <div className="App">
      <Selector/>
     <UserView/>
    </div>
  );
}

export default App;
