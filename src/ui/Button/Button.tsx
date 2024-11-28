import { FC, ReactNode } from "react"
import styles from './Button.module.css'

type Button = {
    children: ReactNode
    size: string
}

const Button: FC<Button> = ({ size, children }) => {
  return (
    <button className={`${styles.button}`} style={{width:`${size}`}}>
        {children}  
    </button>
  )
}

export default Button