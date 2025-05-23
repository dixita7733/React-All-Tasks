import './App.css'
import { useState } from 'react'

function App() {
  const [Psword , setpassword] = useState('text')
  const [Eyes , setEyes] = useState('block')
  let Eye = document.getElementById('eye')

  const Generatepsw = () =>{
      setpassword(Psword === 'text' ? 'password' : 'text')
        
      setEyes(Eyes === 'block' ? 'none' : 'block')
  }

  return (
    <>

    <div class="password-container">
        <label for="password">Password:</label>
        <div class="password-field">
            <input type={Psword} id="password" placeholder="Enter your password"></input>
            <div className='eyes' onClick={Generatepsw} >
            <i class="fa-solid fa-eye " > </i>
            <i class="fa-solid fa-eye-slash" style={{display: Eyes}}> </i>
            </div>
        </div>
        <div class="password-strength">
            <div class="indicator"></div>
        </div>
    </div>
    
    </>
  )
}

export default App
