import { useEffect, useState } from 'react';
import './Todo.css'

const Todo = ({ id, isCompleted, text, time, date, removeTodoById, updateTodoIsCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  useEffect(() => {
    updateTodoIsCompleted(id, isChecked)
  }, [isChecked]);

  function handleCheckBox() {
    setIsChecked(!isChecked);
  }

  return (
    <>
    <div className="todo-item" key={id}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckBox}/>
      
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
    </>
  )
}

export default Todo