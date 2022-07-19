import { useState } from 'react';
import './iterationSample.css';

const IterationSample = () => {
    // 같은 형태인 <li></li>가 반복되는 경우
    /*
    return (
        <ul>
            <li>Snowman</li>
            <li>Ice</li>
            <li>Snow</li>
            <li>Wind</li>
        </ul>
        );
    */

    // index 값을 key로 설정하여 나타냄 => key가 없는 오류 해결
    /*
    const names = ['Snowman', 'Ice', 'Snow', 'Wind'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>;
    */

    // 유동적인 배열 다루기!
    const [names, setNames] = useState([
        { id: 1, text: 'Snowman' },
        { id: 2, text: 'Ice' },
        { id: 3, text: 'Snow' },
        { id: 4, text: 'Wind'}
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 새로운 항목을 추가할 때의 Id

    const onChange = e => setInputText(e.target.value);
    
    // 버튼 클릭할 때 실행되는 함수
    // 데이터 추가
    const onClick = () => {
        // 아무것도 입력하지 않았을 때는 실행하지 않도록 조건 추가
        if (inputText !== ''){
            const nextNames = names.concat({
                id: nextId,     // nextId 값을 id로 설정하고,
                text: inputText
            });

            setNextId(nextId + 1);      // nextId값에 1을 더해 준다.
            setNames(nextNames);    // names(list) 값을 업데이트 해준다.
            setInputText('');       //inputText를 비운다.
        }
    }

    // 키보드 키를 눌렀을 때 발생하는 KeyPress 이벤트를 처리하는 함수
    // Enter키를 눌러서 ADD 버튼을 누르는 것과 동일한 결과를 처리할 수 있다.
    const onKeyPress = (e) => {
        if (e.key === 'Enter'){
            onClick();
        }
    }
    
    // 데이터 삭제
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
        // console.log(nextNames);
    }

    // arr.map(callback, [thisArg])
    // callback은 새로운 배열의 요소를 생성하는 함수!
    // thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스
    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            <ul>{nameList}</ul>
            {/* 들여쓰기 */}
            <div className="in">
                <input
                    value= {inputText}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
                <button onClick={onClick}>ADD</button>
            </div>
        </>
        );
};

export default IterationSample;