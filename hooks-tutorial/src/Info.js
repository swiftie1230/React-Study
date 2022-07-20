// import { useEffect, useState } from 'react';
// import { useReducer } from "react";
import useInputs from "./useInputs";

// useReducer를 사용하여 Info 컴포넌트에서 인풋 상태를 관리
/*
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}
*/

const Info = () => {
    // useState를 사용하여 인풋 상태 관리하는 방법
    /*
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    */

    // reducer 사용
    /*
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    
    const { name, nickname } = state;   // 비구조화 할당
    
    const onChange = (e) => {
        dispatch(e.target);
    };
    */

    // useReducer로 작성했던 로직을 useInputs라는 Hook으로 따로 분리
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;

    // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 HOOK
    // 클래스형 컴포넌트의 경우, componentDidMount & componentDidUpdate와 동일한 기능을 수행한다고 보면 된다.
    /*
    useEffect(() => {
        console.log('effect');
        // console.log('name : ' + name);
        return () => {
            // console.log('cleanup');
            // console.log('name : ' + name);

            console.log('unmount');
        }
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };
    */

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} /><br/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div><br />
            <div>
                <div>
                    <b>NAME : </b> {name}
                </div>
                <div>
                    <b>NICKNAME : </b>{nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;