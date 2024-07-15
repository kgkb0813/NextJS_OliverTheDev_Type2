import * as actions from "@/actions/input"
import { FaCheck } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";
import { ReactNode } from "react";
import Form from "../form/Form";
import clsx from "clsx";
import styles from "./ChangeTodo.module.css"

export interface todoProps{
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const ChangeTodo = ({todo}: {todo: todoProps}, className?: string) => {
  return (
    <div className={styles.TmpContainer}>
      <Form action={actions.changeStatus}>
        <Input 
          name="inputId"
          type="hidden"
          value={todo.id}
        />
        
        <Button
          text={<FaCheck />}
          type="submit"
          actionButton
          bgColor={todo.isCompleted? "green" : "blue"}
        />

      </Form>
    </div>
  )
}

export default ChangeTodo