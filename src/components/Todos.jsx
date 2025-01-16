import Todo from "./Todo";
import "./Todos.css";

const Todos = ({ todos, removeTodoById, updateTodoIsCompleted }) => {
  return (
    <>
      <div className="todo-list-container">
          {todos.map(({id, isCompleted, text, time, date}) => {
            return (
              <Todo 
                key={id}
                id={id}
                isCompleted={isCompleted}
                text={text}
                time={time}
                date={date}
                removeTodoById={removeTodoById}
                updateTodoIsCompleted={updateTodoIsCompleted}
              />
            )
          })}
      </div>
    </>
  )
}

export default Todos