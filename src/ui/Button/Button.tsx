import { ButtonHTMLAttributes, FC, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    width: string
}

const Button: FC<ButtonProps> = ({ width, children, ...props }) => {
  return (
    <div className={`${width} h-[3.2rem]`}>
    <button {...props} className={`bg-[#365FAC] text-white size-full`}>
      {children}  
    </button>
    </div>
   
  )
}

export default Button