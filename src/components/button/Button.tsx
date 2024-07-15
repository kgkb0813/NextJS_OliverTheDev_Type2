import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import styles from "./Button.module.css"

declare module "react" {
  interface CSSProperties {
    "--bgColor"?: string;
  }
}

export interface buttonProps{
  text: string | ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

const Button = ({text, type, onClick, actionButton, bgColor}: buttonProps) => {
  return (
      <button 
        type={type}
        onClick={onClick}
        className={clsx(styles.input,
          {
            [styles.ButtonActionButton]: actionButton,
            [styles.Button]: true,
          }
        )}
        style={{"--bgColor": bgColor}}
      >
        {text}
      </button>
  )
}

export default Button



// className="bg-blue-600 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"


// className={clsx(styles.input,
//   {
//     [styles.ButtonActionButton]: actionButton,
//     [styles.Button]: true,
//   }
// )}


// className={clsx(
//   actionButton ? styles.ButtonActionButton : null,
//   styles.Button
// )}

// className={clsx(
//   actionButton &&
//     "text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
//   `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
// )}

// className={clsx(
//   actionButton &&
//     "text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
//   `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
// )}


// className={clsx(
//   actionButton &&
//     "text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
//   `bg-blue-600 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
// )}