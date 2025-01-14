import { useState } from "react";
import dayjs from "dayjs";
import "./TodoInput.css";

const TodoInput = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function addNewTodo() {
    if (inputValue.trim() === '') {
      alert('Cannot add empty Todo');
      return;
    }
    setTodos([...todos, {
      id: crypto.randomUUID(),
      isCompleted: false,
      text: inputValue,
      date: dayjs().format('MMMM D, YYYY'),
      time: dayjs().format('h:mm A')
    }]);
    setInputValue('');
  }

  return (
    <>
      <div className="input-container">
        <input
            className="todo-input"
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new Todo"
          />
        <button className="todo-add-button" onClick={addNewTodo}>Add</button>
      </div>
    </>
  )
}

export default TodoInput