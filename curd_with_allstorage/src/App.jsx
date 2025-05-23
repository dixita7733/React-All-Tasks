import { useState } from 'react'
import './App.css'
import Localstorage from './Component/Localstorage'
import Sessionstorage from './Component/Sessionstorage'
import Cokkies from './Component/Cokkies'

function App() {
  let [state , setstate] = useState()

  let handlelocalstorage = () => {
       setstate("local")
  }

  let handlesessionstorage = () => {
    setstate("session")
}

let handlecookies = () => {
  setstate("cokkies")
}
  return (

    <>
      <button onClick={handlelocalstorage}>Local Storage</button>
      <button onClick={handlesessionstorage}>Session Storage</button>
      <button onClick={handlecookies}>Cookies</button>

    {state == "" && <Localstorage/>}
    { state == "local" && <Localstorage/> }
    {state == "session" && <Sessionstorage/>}
    {state == "cokkies" && <Cokkies/>}
    </>
  )
}

export default App
