
import './App.css'
import { useState } from 'react'

function App() {
  let [forminput , setforminput] = useState({ email: '', password: '' });
  // let [forminput , setforminput] = useState()
  // let emailref = useRef();



  let handleform = (e) => {
     let {name , value} = e.target;

     setforminput((formvalue) => ({...formvalue, [name] : value}));
     console.log(forminput)
  }

  let handleformSubmit = (e) => {
      e.preventDefault();

      const { email, password } = forminput;

      const formdata = {
        email,
        password,
      };
  
      console.log(formdata);
  }

  return (
    <>
         <div className="container">
        <p className="headline">login</p>
        <form onSubmit={handleformSubmit}>
        <div>
            <div className="box">
                <p>Email</p>
                <div><input type="text" name='email' value={forminput.email} onChange={handleform} placeholder="Enter your Email" ></input></div>
            </div>
        </div>
        <div>
            <div className="box">
                <p>Password</p>
                <div><input type="password" name='password' value={forminput.password} onChange={handleform} placeholder="Enter your Password"></input></div>
            </div>
        </div>
        <input type="submit" value="Submit" className="loginBtn"></input>

        <p className="text">Don't have an account?<a href="#">Sign in</a></p>
        </form>
    </div>
    </>
  )
}

export default App
