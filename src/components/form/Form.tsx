import React, { ReactNode } from 'react'
export interface formProps{
  children: ReactNode;
  className?: string; 
  action?: (formData: FormData) => void; 
  onSubmit?: () => void;
}

const Form = ({children, className, action, onSubmit}: formProps) => {
  return (
    <div>
      <form
        action={action}
        onSubmit={onSubmit}
        className={className}
      >
        {children}
      </form>
    </div>
  )

}

export default Form


{/* 
  
  <form className="flex flex-col w-full gap-5"> 
  
  
*/}