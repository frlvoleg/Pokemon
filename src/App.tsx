import { useState } from 'react'
import './App.css'
import SignIn from './components/SignIn/SignIn'

function App() {
  const [signIn, setSignIn] = useState<boolean>(true);
  
  

  return (
    <>
      <SignIn signIn={!signIn}/>
    </>
  )
}

export default App