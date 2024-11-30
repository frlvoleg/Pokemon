import { Typography } from '../../ui/Typography/Typography'
import Input from '../../ui/Input/Input'
import Button from '../../ui/Button/Button'
import { FC } from 'react'

type SignInProps = {
    signIn: boolean
}

const SignIn:FC<SignInProps> = ({signIn}) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-between gap-[3.2rem]">
                <Typography>Sign up</Typography>
                <Typography>Sign in</Typography>
            </div>
      <div className="flex justify-between gap-[2.4rem] flex-col ">
          <div>
            <Typography>Login</Typography>
            <Input width='w-[35.2rem]' placeholderText='Input login' />
          </div>
          <div>
              <Typography>Password</Typography>
              <Input width='w-[35.2rem]' placeholderText='Input password' />
          </div>
          
          {!signIn &&
              (<div>
                  <Typography>Password confirmation</Typography>
                  <Input width='w-[35.2rem]' placeholderText='Input password again' />
              </div>)
              }
          
      
      <Button width='w-[35.2rem]'><Typography>{signIn ? 'Sign in' : 'Sign up'}</Typography> </Button>
            </div>
        </div>
  )
}

export default SignIn