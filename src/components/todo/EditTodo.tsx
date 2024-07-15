"use client"
import * as actions from "@/actions/input"
import { FaCheck } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";
import { ReactNode, useState } from "react";
import Form from "../form/Form";
import clsx from "clsx";
import styles from "./EditTodo.module.css"
import { MdEdit } from "react-icons/md";

export interface todoProps{
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}

const EditTodo = ({todo}: {todo: todoProps}, className?: string) => {
  const [editTodoState, setEditTodoState] = useState(false);
  const handleEdit = ()=>{
    if(todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  }

  const handleSubmit = ()=>{
    setEditTodoState(false);
  }
  return (
    <div >
      <div className={styles.Container}>
        <div style={{width:"60px"}}>
        <Button
          text={<MdEdit />}
          actionButton
          onClick={handleEdit}
        />
        </div>
        {
          editTodoState ? (
            <Form
              action={actions.editTodo}
              onSubmit={handleSubmit}
            >
              <div className={styles.InputContainer}>
                <Input
                  name="inputId"
                  type="hidden"
                  value={todo.id}
                />
                <div className={styles.InputWrapper}>
                  <div className={styles.InputCard}>
                    <Input
                      name="newTitle"
                      type="text"
                      placeholder="Edit Todo"
                    />
                    <Button
                      type="submit"
                      text="Save" 
                    />
                  </div> 
                </div>
              </div>
            </Form>
          ) : null
        }
      </div>
    </div>
  )
}

export default EditTodo