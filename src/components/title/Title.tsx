
import styles from './Title.module.css'

const Title = () => {
  return (
    <div className={styles.Container}>
      <span className={styles.Title1}>Todo App</span>
      <span className={styles.Title2}>w/ Server Action</span>
    </div>
  )
}

export default Title