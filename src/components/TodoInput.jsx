import { useState } from "react";
import dayjs from "dayjs";

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
      text: inputValue,
      date: dayjs().format('MMMM D, YYYY'),
      time: dayjs().format('h:mm A')
    }]);
    setInputValue('');
  }

  return (
    <>
      <div>todo</div>
      <input
        type="text" 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new Todo"
      />
      <button onClick={addNewTodo}>Add</button>
    </>
  )
}

export default TodoInput