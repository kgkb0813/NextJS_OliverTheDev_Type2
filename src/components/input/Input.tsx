import styles from "./Input.module.css"

export interface inputProps {
  name:          string;
  type:          string;
  value?:        string;
  placeholder?:  string;
  className?:    string;
}
const Input = ({name, type, value, placeholder, className}: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={styles.Input}
      />
    </div>
  )
}

export default Input