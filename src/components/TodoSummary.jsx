import "./TodoSummary.css"

const TodoSummary = ({ todos }) => {
  return (
    <>
      <div className="todo-list-summary-container">
        <div className="summary-created">
          <div>Task created</div>
          <button>{todos.length}</button>
        </div>
        <div className="summary-completed">
          <div>Completed</div>
          <button>2 of {todos.length}</button>
        </div>
      </div>
    </>
  )
}

export default TodoSummary