import styles from './TaskInfo.module.css'

function TaskInfo({tasks}) {
  const total = tasks.length

  const completed = tasks.reduce((acc, obj) => { 
    return acc + obj.completed; 
  }, 0)

  console.log('completed', completed)
  return(
    <div className={styles.info}>
      <p className={styles.created}>Tarefas criadas <span className={styles.counter}>{total}</span></p>
      <p className={styles.concluded}>Concluídas 
        <span className={styles.counter}>{completed > 0 ? `${completed} de ${total}` : 0}</span>
      </p>
    </div>
  )
}

export default TaskInfo