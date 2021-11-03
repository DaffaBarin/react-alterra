import TodoList from "./components/ToDoList"
import styles from "./ToDoPage.module.css"

export default function TodoPage({ todos }) {
  return (
    <div className={styles.todoPage}>
      <div className={styles.header}>
        <h2 className={styles.h2}>To Do App</h2>
      </div>
      <div className={styles.todoPageContent}>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}