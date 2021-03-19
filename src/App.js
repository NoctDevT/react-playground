import logo from './logo.svg';
import './App.css';
import {USExample as UseState} from './component_hooks/useState/useState'
import {UFExample as UseEffect} from './component_hooks/useEffect/useEffect'
import {AppRouter as UseContext} from './component_hooks/useContext/app'
import {MemoExample as UseMemo} from './component_hooks/useMemo/useMemo'
import {RefExample as UseRef} from './component_hooks/useRef/useRef'
import {ReducerExample as UseReducer} from './component_hooks/useReducer/useReducer'



import Project from './component_hooks/miniproject/Miniproject'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <UseState/> */}
       {/* <UseEffect/> */}
       {/* <UseContext/> */}
       {/* <UseMemo/> */}
       {/* <Project/> */}
       {/* <UseRef/> */}
       <UseReducer/>
      </header>
    </div>
  );
}

export default App;
