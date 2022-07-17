// 클래스형 컴포넌트로 구현
import { Component } from 'react';

class EventPractice_ClassComponent extends Component {

    // 초깃값 설정 in 클래스형 컴포넌트 
    state = {
        message: '',
        username: ''
    }

    // 함수가 호출될 때 this는 호출부에 따라 결정되므로 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다.
    // 따라서 메서드를 this와 바인딩(binding) 하는 작업이 필요하다.
    // 메서드 바인딩을 생성자 메서드에서 하는 방법
    /*
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    */

    // 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것이다.
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
 
        });
    }

    handleClick = () => {
        alert('username : ' + this.state.username + '\nmessage : ' + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    // "input에서 ENTER를 눌렀을 때" 발생하는 KeyPress 이벤트 처리
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return(
            <div>
                <h1>Event Practice !</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    value={this.state.username}
                    onChange={this.handleChange}
                /> <br />
                <input 
                    type="text"
                    name="message"
                    placeholder="Enter anything"
                    value={this.state.message}
                    // 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주는 방법
                    /*
                    onChange={
                        (e) => {
                            // console.log(e);
                            console.log(e.target.value);
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                    */
                   onChange={this.handleChange}
                   onKeyPress={this.handleKeyPress}
                /> <br />
                <button onClick={this.handleClick}
                    // 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주는 방법
                    /* 
                    button onClick={
                        () => {
                            alert(this.state.message);
                            this.setState({
                                message: ''
                            });
                        }
                    } 
                    */
                >CONFIRM</button>
            </div>
        );
    }
}

export default EventPractice_ClassComponent;