import { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hello!');
    const onClickLeave = () => setMessage('GoodBye!');

    // useState는 한 컴포넌트에서 여러번 사용해도 상관없다.
    const [color, setColor] = useState('black');
    const onClickRed = () => setColor('red');
    const onClickGreen = () => setColor('green');
    const onClickBlue = () => setColor('blue');

    return (
        <div>
            <button onClick={onClickEnter}>Entress</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={onClickRed}>
                RED
            </button>
            <button style={{ color: 'green' }} onClick={onClickGreen}>
                GREEN
            </button>
            <button style={{ color: 'blue' }} onClick={onClickBlue}>
                BLUE
            </button>
        </div>
    );
};

export default Say;