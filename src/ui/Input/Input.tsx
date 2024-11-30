import { FC, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    width? : string
    placeholderText?: string
}

 const Input: FC<InputProps> = ({width, placeholderText, ...props}) =>{
  return (
      <div  className={`${width} h-[3.2rem]`}>
          <input  {...props} type="text" placeholder={`${placeholderText}`} className='placeholder:text-[1.4rem] size-full'/>
    </div>
  )
}
export default Input