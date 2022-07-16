import './App.css';
import propTypes from 'prop-types';
import { Component } from 'react';
/*
// 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것이다!
// 함수형 컴포넌트에서 props 사용하기
const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <>
        <div className='react'>My New Outstanding Component</div>
        <div>
            Hi, My name is {name}! <br />
            children value is {children}! <br />
            My favorite number is {favoriteNumber}. 
        </div>
        </>
    );
};
*/

// 클래스형 컴포넌트에서 props 사용하기
class MyComponent extends Component {
    // 클래스형 컴포넌트에서는 defaultProps와 propTypes를 내부에서 설정하기 가능.
    static defaultProps = {
        name: 'default name'
    };
    static propTypes = {
        name: propTypes.string,
        favoriteNumber: propTypes.number.isRequired
    };

    render() {
        // render 함수에서 this.props를 조회하면 된다.
        const {name, favoriteNumber, children} = this.props; // 비구조화 할당
        return (
            <>
            <div className='react'>My New Outstanding Component</div>
            <div>
                Hi, my name is {name}! <br />
                children value is {children}! <br />
                My favorite number is {favoriteNumber}. 
            </div>
            </>
        )
    }
}

// defaultProps와 propTypes는 함수형, 클래스형 상관없이 동일하게 설정할 수도 있다.
/*
MyComponent.defaultProps = {
    name: 'default name'
};

MyComponent.propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired
};
*/

export default MyComponent;