// 함수형 컴포넌트로 구현

import { useState } from 'react';

const EventPractice_FunctionComponent = () => {
    // useState를 통해 사용하는 상태에 문자열을 넣는 방법
    /*
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    */

    // useState를 통해 사용하는 상태에 객체를 넣는 방법
    // e.target.name 값을 활용하기 위해 form 객체를 사용해 줄 수 있다.
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;     // 비구조화 할당

    const onChange = e => {
        const nextForm = {
            ...form,    // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert('username : ' + username + '\nmessage: ' + message);

        /*
        setUsername('');
        setMessage('');
        */
        setForm({
            username: '',
            message: ''
        })
        
    };
    
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
             <h1>Event Practice !</h1>
            <input 
                type="text"
                name="username"
                placeholder="USERNAME"
                value={username}
                onChange={onChange}     // {onChangeUsername}
            /><br />
            <input 
                type="text"
                name="message"
                placeholder="Enter anything"
                value={message}
                onChange={onChange}     // {onChangeMessage}
                onKeyPress={onKeyPress}
            /><br />
            <button onClick={onClick}>CONFIRM</button>
        </div>
    );
};

export default EventPractice_FunctionComponent;