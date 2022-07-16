// import logo from './logo.svg';
// import './App.css';
// import { Fragment } from 'react';

// import { Component } from 'react';

// import MyComponent from './MyComponent';

// import Counter from './Counter';

import Say from "./Say";


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

/*
function App(){
  const name = 'REACT';
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
*/

/*
// 클래스형 컴포넌트를 생성할 경우 
// 클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보어주어야 할 JSX를 반환해야 한다.
class App extends Component {
  render() {
    const name = 'REACT';
    return <div className="react">{name}</div>
  }
}
*/

const App = () => {
  // return <MyComponent name ="React" />;
  // return <MyComponent />;
  // return <MyComponent name = "REACT" favoriteNumber={13}>REACT</MyComponent>;

  // return <Counter />;
  
  return <Say />;
};



export default App;
