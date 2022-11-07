import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './TaskContainer.module.css';
import TaskList from './TaskList'
import EmptyState from './EmptyState';
import TaskInfo from './TaskInfo';

function TaskContainer() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleAddNewTask = () => {
    event.preventDefault()
    const task = {
      id: Math.floor(Math.random() * 100),
      text: newTask,
      completed: false
    }
    task.text && setTasks([...tasks, task])
    setNewTask('')
  }

  const deleteTask = id => {
    const updatedList = tasks.filter(t => t.id !== id)
    setTasks(updatedList)
  }

  const completedTask = id => {
    const updatedTask = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updatedTask)
  }

  return(
    <>
      <form onSubmit={handleAddNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e)  => {setNewTask(e.target.value)}}
        />
        <button onClick={handleAddNewTask} className={styles.addButton}>
          Criar <PlusCircle style={{marginLeft: 5}}/>
        </button>
      </form>
      <TaskInfo tasks={tasks}/>
      {tasks.length === 0 ? (<EmptyState />) : 
        (
          <div>
            {tasks.map(task => {
              return(
                <TaskList
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onCompleteTask={completedTask}
                />
              )
            })}
          </div>
        )
      }
    </>
  )
}

export default TaskContainer