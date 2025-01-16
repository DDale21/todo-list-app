import { useState } from 'react'
import { useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoSummary from './components/TodoSummary';
import Todos from './components/Todos';
import './App.css'

function App() {
  const [todos, setTodos] = useState(loadTodosFromLocalStorage());

  useEffect(() => {
    console.log(todos);
    saveTodosToLocalStorage(todos)
  }, [todos]);

  function loadTodosFromLocalStorage() {
    try {
      const localTodos = localStorage.getItem('todos');
      if (!localTodos) {
        return [];
      } 
      return JSON.parse(localTodos);
    } catch (err) {
      console.error("Failed to load todos", err)
      return [];
    }
  }

  function saveTodosToLocalStorage(todos) {
    try {
      if (!todos) {
        throw new Error("Cannot save empty todos");
      }
      const localTodos = JSON.stringify(todos);
      localStorage.setItem('todos', localTodos)
    } catch (err) {
      console.error("Failed to save todos", err)
    }
  }

  function removeTodoById(todoId) {
    const newTodo = todos.filter(({id}) => id !== todoId);
    setTodos(newTodo);
  }

  function updateTodoIsCompleted(todoId, isChecked) {
    const newTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: isChecked }
      }
      return todo;
    });
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

        <Todos 
          todos={todos} 
          removeTodoById={removeTodoById} 
          updateTodoIsCompleted={updateTodoIsCompleted} 
        />
        
      </div>
    </>
  )
}

export default App
