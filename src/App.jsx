import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  useEffect(() => {
    console.log(todos);
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <TodoInput 
        todos={todos}
        setTodos={setTodos}
      />
      {todos.map(({id, text, time, date}) => {
        return (
        <div key={id}>
          <div>{text}</div>
          <div>{time}</div>
          <div>{date}</div>
        </div>
      )
      })}
    </>
  )
}

export default App
