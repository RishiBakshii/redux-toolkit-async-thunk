import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counterSlice';
import { LoadUserData } from './features/users/component/LoadUserData';

function App() {

  const dispatch=useDispatch()

  const count=useSelector((state)=>state.counterSlice)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>{count}</h1>
        <div>
        <button style={{fontSize:"4rem",padding:"1rem",width:"6rem"}} onClick={()=>dispatch(decrement())}>-</button>
        <button style={{fontSize:"4rem",padding:"1rem",width:"6rem"}} onClick={()=>dispatch(increment())}>+</button>
        <LoadUserData/>
        </div>

      </header>

    </div>
  );
}

export default App;
