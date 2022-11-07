import { ClipboardText } from 'phosphor-react'
import styles from './EmptyState.module.css'

function EmptyState() {
  return(
    <div className={styles.emptyState}>
      <ClipboardText size={56} className={styles.icon}/>
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}

export default EmptyState