import { useEffect, useState } from "react";
import "./TodoSummary.css"

const TodoSummary = ({ todos }) => {
  const [completedTodos, setCompletedTodos] = useState([]);
  useEffect(() => {
    const newCompletedTodos = todos.filter(({isCompleted}) => isCompleted);
    setCompletedTodos(newCompletedTodos)
  }, [todos]);

  return (
    <>
      <div className="todo-list-summary-container">
        <div className="summary-created">
          <div>Task created</div>
          <button>{todos.length}</button>
        </div>
        <div className="summary-completed">
          <div>Completed</div>
          <button>{completedTodos.length} of {todos.length}</button>
        </div>
      </div>
    </>
  )
}

export default TodoSummary