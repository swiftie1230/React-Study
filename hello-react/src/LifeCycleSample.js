import { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;   // ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');

        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }

        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4이면 업데이트 하지 않는다!
        return nextState.number % 10 !== 4;
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        
        if (snapshot) {
            console.log('Color before Update: ', snapshot);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return(
            <div>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>ADD
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;