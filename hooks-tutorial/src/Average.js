import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
    console.log('Calculating Average value...');
    
    if (numbers.length === 0) return 0;
    
    const sum = numbers.reduce((a, b) => a + b);
    
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback (e => {
        setNumber(e.target.value);
    }, []);     // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback (e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        // 등록할 때 포커스가 인풋 쪽으로 넘어가도록
        inputEl.current.focus();
    }, [number, list]);     // number 혹은 list가 바뀌었을 때만 함수 생성

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onInsert();
        }
    }

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} onKeyPress={onKeyPress} ref={inputEl} />
            <> </>
            <button onClick={onInsert}>REGISTER</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>AVERAGE : </b> {avg}
            </div>
        </div>
    );
};

export default Average;