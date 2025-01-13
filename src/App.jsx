import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  useEffect(() => {
    console.log(todos);
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  function removeTodoById(todoId) {
    const newTodo = todos.filter(({id}) => id !== todoId);
    setTodos(newTodo);
  }

  return (
    <>
      <div className="title">todo</div>
      <div className="todo-container">
        <TodoInput 
          todos={todos}
          setTodos={setTodos}
        />

        <div className="todo-list-container">
          {todos.map(({id, text, time, date}) => {
            return (
            <Todo 
              key={id}
              id={id}
              text={text}
              time={time}
              date={date}
              removeTodoById={removeTodoById}
            />
          )
          })}
        </div>
        
      </div>
    </>
  )
}

export default App
