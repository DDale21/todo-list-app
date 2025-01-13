import './Todo.css'

const Todo = ({ id, text, time, date, removeTodoById }) => {
  return (
    <>
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
    </>
  )
}

export default Todo