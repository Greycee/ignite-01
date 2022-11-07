import Header from './components/Header'
import styles from './global.module.css'
import TaskContainer from './components/TaskContainer'

function App() {

  return (
    <>
      <Header />
      <div className="App">
        <TaskContainer />
      </div>
    </>
  )
}

export default App
