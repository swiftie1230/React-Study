// import logo from './logo.svg';
// import './App.css';
// import { Fragment } from 'react';

// import MyComponent from './MyComponent';

// import Counter from './Counter';

// import Say from "./Say";

// import EventPractice_ClassComponent from "./EventPractice_ClassComponent";
// import EventPractice_FunctionComponent from "./EventPractice_FunctionComponent";

// import ValidationSample from "./ValidationSample";

// import ScrollBox from './ScrollBox';

// import IterationSample from './IterationSample';

import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import { Component } from 'react';




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

// 랜덤 색상을 생성한다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


// 클래스형 컴포넌트를 생성할 경우 
// 클래스형 컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보어주어야 할 JSX를 반환해야 한다.
// App 컴포넌트에서 ref를 사용할 것이기 때문에 클래스형 컴포넌트로 작성.
class App extends Component {

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    // return <ValidationSample />;
    return (
     // <IterationSample />
     <div>
      <ErrorBoundary>
        <button onClick={this.handleClick}>RANDOM COLOR</button>
        <LifeCycleSample color={this.state.color}/>
      </ErrorBoundary>
     </div>
    );
  }
}


// 함수형 컴포넌트로 작성
/*
const App = () => {
  // return <MyComponent name ="React" />;
  // return <MyComponent />;
  // return <MyComponent name = "REACT" favoriteNumber={13}>REACT</MyComponent>;

  // return <Counter />;
  
  // return <Say />;

  // eslint-disable-next-line react/jsx-pascal-case
  // return <EventPractice_FunctionComponent />;

};
*/



export default App;
