// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
/*
function App() {
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
      </header>
    </div>
  );
}
*/

function App(){
  const name = 'REACT';
  /* 
  // style을 외부에서 선언 후 사용하는 경우!
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성한다.
    backgroundColor: 'white',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16 // 단위를 생략하면 px로 지정된다.
  };
  */
  return (
    <Fragment>
      {name === 'REACT' ? (
        <div className = "react">It is {name}!</div>
      ):(
        <div className = "react">It is not {name}!</div>
      )}
    </Fragment>
  )
}

export default App;
