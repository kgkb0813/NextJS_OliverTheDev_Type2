import * as actions from "@/actions/input"
import { FaCheck, FaTrash } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";
import { ReactNode } from "react";
import Form from "../form/Form";
import clsx from "clsx";
import styles from "./DeleteTodo.module.css"

export interface todoProps{
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const DeleteTodo = ({todo}: {todo: todoProps}, className?: string) => {

  return (
    <div className={styles.Container}>
      <Form action={actions.deleteTodo}>
        <Input 
          name="inputId"
          type = "hidden"
          value={todo.id}
        />
        <Button 
          type="submit"
          actionButton
          bgColor="hotpink"
          text= {<FaTrash />}
        />
      </Form>
    </div>
  )
}

export default DeleteTodo