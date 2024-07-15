import React from 'react'
import styles from './Todo.module.css'
import ChangeTodo from './ChangeTodo';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

export interface todoProps{
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const Todo = ({todo}: {todo: todoProps}) => {
  return (
    <div className={styles.Container}>
      <ChangeTodo todo={todo} />
        {todo.title}
      <EditTodo todo={todo}/>
      <DeleteTodo todo={todo}/>
    </div>
  )
}

export default Todo
