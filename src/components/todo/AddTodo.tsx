import * as actions from '@/actions/input'
import Button from '../button/Button'
import Form from '../form/Form'
import Input from '../input/Input'
import styles from './AddTodo.module.css'

const AddTodo = () => {
  return (
    <div className={styles.Container}>
    <Form
      className={styles.Form} 
      action={actions.createTodo}
    > 
    <div className={styles.FormWrapper}>
      <div className={styles.inputWrapper}>
            <Input 
              name='input'
              type='text'
              placeholder='Enter AddTodo ....'
              className={styles.Input}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button 
              text="Add"
              type="submit"
              bgColor="green"
            />
          </div>
    </div>
    </Form>
    </div>

  )
}

export default AddTodo