import './App.css'
import { useState } from 'react'

function App() {
  let [count, setcount] = useState(0);

function plus(){
  setcount(count => count + 1);
   console.log(count)
}

  return (
    <>
     <h1>{count}</h1>
     <button onClick={plus}>+</button>
    </>
  )
}

export default App

