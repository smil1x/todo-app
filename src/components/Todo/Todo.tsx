import styles from './Todo.module.scss'
import CreateTask from "../CreateTask/CreateTask.tsx";
import TaskList from "../TaskList/TaskList.tsx";
import TasksFilters from "../TasksFilters/TasksFilters.tsx";
import {useFilteredTasks} from "../../hooks";

function Todo() {

  const tasks = useFilteredTasks();

  return <>
    <CreateTask/>
    <p className={styles.contentLabel}>Список задач</p>
    <div className={styles.taskContainer}>
      <TaskList tasks = {tasks}/>
      <TasksFilters/>
    </div>
  </>
}

export default Todo
