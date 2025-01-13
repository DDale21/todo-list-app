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
            <div className="todo-item" key={id}>
              <input type="checkbox" />
              <div className="todo-content-container">
                <div className="todo-text">{text}</div>
                <div className="todo-date-container">
                  <div className="todo-time">{time}</div>
                  <div className="todo-date">{date}</div>
                </div>
              </div>
              
              <button
                className="todo-delete-button"
                onClick={() => removeTodoById(id)}
              >Delete</button>
            </div>
          )
          })}
        </div>
        
      </div>
    </>
  )
}

export default App
