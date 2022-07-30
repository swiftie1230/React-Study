import { MdAddTask } from 'react-icons/md';
import './TodoInsert.scss';

import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {

  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');   // value 값 초기화
      
      // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
      // 이를 방지하기 위해 이 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input 
        placeholder="Enter the 'To-Do's'" 
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAddTask />
      </button>
    </form>
  );
};

export default TodoInsert;