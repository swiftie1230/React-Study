import { Component } from "react";

class Counter extends Component {
    /*
    // state의 초깃값을 지정하기 위해 constructor 메서드 선언 방법
    constructor(props) {
        // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 한다!
        super(props);
        // state의 초깃값 설정하기
        // 컴포넌트의 state는 객체 형식이어야 한다.
        // 여러 값이 있을 수 있다.
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    */

    // constructor 메서드를 선언하지 않고 state의 초깃값을 지정하는 방법
    state = {
        number: 0, 
        fixedNumber: 0
    };


    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다 : 비구조화 할당 
        return (
            <div>
                <h1>{number}</h1>
                <h2>Nonchanging value : {fixedNumber}</h2>
                <button
                // on click을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
                onClick={() => {
                    // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                    // 이 함수는 인자로 전달된 객체 안에 들어있는 값만 바꾸어 준다.
                    // setState를 사용하면 state가 비동기적으로 업데이트 된다.
                    // this.setState({ number: number + 1 });
                    // this.setState({ number: this.state.number + 1});
                    
                    // 해결방법
                    /*
                    // 인자로 객체 대신 함수를 넣어주는 방법
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    })

                    
                    // 함수에서 바로 객체를 반환할 수도 있음
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                    */

                    this.setState(
                    { 
                        number: number + 1 
                    }, 
                    // state 값 업데이트 후 특정 작업을 하고 싶을 때는 setState의 두번째 파라미터로 콜백 함수를 등록하여 작업 처리 가능!
                    () => {
                        console.log('setState was called just now');
                        console.log(this.state);
                    }
                    );
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;