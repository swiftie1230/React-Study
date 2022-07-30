// import logo from './logo.svg';
// import './App.css';

// import React from 'react';

import { useState, useRef, useCallback } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn the basic for React',
      checked: true,
    },
    {
      id: 2,
      text: 'Try styling the component',
      checked: true,
    },
    {
      id: 3,
      text: 'Try making Scheduling App',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text, 
        checked: false,
      };
        setTodos(todos.concat(todo));
        nextId.current += 1; // nextId 1씩 더하기
      },
      [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return(
  <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>
  );
};

export default App;
