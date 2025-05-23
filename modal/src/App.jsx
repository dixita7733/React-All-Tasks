import './App.css'
import { useState, useEffect } from 'react';

function App() {
  let [loader, setlodaer] = useState(false)
  let [display, setdisplay] = useState(false)

  let closebtn = () => {
    // setdisplay(display === false ? true : false)
    setdisplay(display)
    
    console.log("close")
    setlodaer(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setlodaer(true)
    }, 5000);
  },[display])


  return (
    <>
<div className=""></div>
        <div class="modal " id="musicModal" onClick={closebtn}>
        {loader && ( 
        <div class="modal-content" >
            <span class="close-btn" onClick={closebtn}>&times;</span>
            <h2>New Music Release!</h2>
            <p>Listen to the latest hits now. Don't miss out!</p>
            <button class="btn">Listen Now</button>
            <button class="btn" onClick={closebtn}>Close</button>
        </div>
       )}
     </div>

    </>
  )
}

export default App
