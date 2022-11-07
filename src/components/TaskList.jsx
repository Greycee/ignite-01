import { Circle, CheckCircle, Trash } from 'phosphor-react'
import styles from './TaskList.module.css'

function TaskList({task, onDeleteTask, onCompleteTask}) {
  const handleDeleteTask = () => {
    onDeleteTask(task.id)
  }

  const handleCompletedTask = () => {
    onCompleteTask(task.id)
  }

  return(
    <div className={styles.listItem}>
      <button onClick={handleCompletedTask}>
        {task.completed
            ? (<CheckCircle size={24} color="var(--purple)" weight="fill" />)
            : (<Circle size={24} color="var(--blue)"/>)
        }
      </button>
      <div className={task.completed ? styles.checked : styles.unchecked}>
        {task.text}
      </div>
      <button onClick={handleDeleteTask} className={styles.trashIcon}>
        <Trash size={18} />
      </button>
    </div>
  )
}

export default TaskList