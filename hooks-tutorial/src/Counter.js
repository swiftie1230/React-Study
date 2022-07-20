// import { useState } from 'react';
import { useReducer } from "react";

// useState를 사용하여 구현한 Counter
/*
const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                Current counter value is <b>{value}</b>.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};
*/

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:    
        // 아무것도 해당되지 않을 때 기존 상태 반환
        return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                Current counter value is <b>{state.value}</b>.
            </p>
            <button onClick={() =>  dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};



export default Counter;