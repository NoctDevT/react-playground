import logo from './logo.svg';
import './App.css';
import {USExample as UseState} from './component_hooks/useState/useState'
import {UFExample as UseEffect} from './component_hooks/useEffect/useEffect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <UseState/> */}
       <UseEffect/>
      </header>
    </div>
  );
}

export default App;
