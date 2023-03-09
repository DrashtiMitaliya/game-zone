import logo from './logo.svg';
import './App.css';
import {Selector} from './component/Selector'
import { UserView } from './component/UserView';

function App() {
  return (
    <div className="App">
      <Selector/>
     <UserView/>
    </div>
  );
}

export default App;
