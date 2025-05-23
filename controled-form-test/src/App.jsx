
// import { useRef } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  let [formdata , setformdata] = useState({name: '', comment: ''})

  // let formdisplay = useRef();


  let handleform = (e) => {
     let {name , value} = e.target

     setformdata((values) => ({...values, [name] : value} ))
     console.log(formdata)
  }

  let handleformSubmit = (e) => {
    e.preventDefault();

     let {name , comment} = formdata;

     let formvalues = {
      name ,
      comment, 
      }

     console.log(formvalues)

    //  let showform = document.querySelector("formdisplay")
    //  showform.innerText = "hy"
    
    let head = document.querySelector(".head")
    console.log(head)
    head.innerText = `${formdata.name} `

    let msg = document.querySelector(".msg")
    msg.innerText = `${formdata.comment}`
    // formdisplay.append(head)
      
  }

  return (
    <>
    <div className='form-main'>
     <form  className='myform'>
       <input type='text' name='name' value={formdata.name} placeholder='Enter Your Name' onChange={handleform}></input>
       <br></br><br></br>
       <textarea id="comment" name="comment" value={formdata.comment} placeholder='Enter your Comment' rows="4" cols="50" onChange={handleform}></textarea>
       <br></br><br></br>
       <input type='button' value={"post"} onClick={handleformSubmit}></input>
     </form>

     <div className='formdisplay' >
         <h1>Leave a Comment / Review</h1>
         <h1 className='head'></h1>
         <h3 className='msg'></h3>
     </div>
     </div>
    </>
  )
}

export default App
