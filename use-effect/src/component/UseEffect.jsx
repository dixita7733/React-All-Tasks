import { useState, useEffect } from 'react'

const UseEffect = () => {
    let [count, setcount] = useState(0);

let plus = () => {
  setcount(count + 1)
}


let minus = () => {
  if(count > 0){
    setcount(count - 1)
  }
}



useEffect(() => {
  alert("hello");
},[count])


  return (
    <>
    <h1>{count}</h1>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    </>
  )
}

export default UseEffect

