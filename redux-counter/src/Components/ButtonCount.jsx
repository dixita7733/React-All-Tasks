import React from 'react'
import { useDispatch } from 'react-redux'

const ButtonCount = () => {
    const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({type: "Increment"})}>+</button>
      <button onClick={() => dispatch({type: "Decrement"})}>-</button>
    </>
  )
}

export default ButtonCount
