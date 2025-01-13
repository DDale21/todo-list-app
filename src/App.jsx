import { useState } from 'react'
import { useEffect } from 'react';
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';
import TodoSummary from './components/TodoSummary';
import './App.css'

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

        <TodoSummary todos={todos} />

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
