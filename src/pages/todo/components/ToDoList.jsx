import styles from "./ToDoList.module.css"

export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <div className={styles.todoItem} key={todo.id.toString()} style={todo.completed ? {textDecoration: "line-through",backgroundColor:"grey"} : {backgroundColor: "lime"}}>
          {todo.title}
        </div>
      ))}
    </>
  )
}