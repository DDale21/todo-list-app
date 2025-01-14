import { useEffect, useState } from 'react';
import './Todo.css'
import TrashIcon from "../assets/trash.svg";

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
      <input className="todo-completed-checkbox" type="checkbox" checked={isChecked} onChange={handleCheckBox}/>
      
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
      ><img src={TrashIcon} /></button>
    </div>
    </>
  )
}

export default Todo