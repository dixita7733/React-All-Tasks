import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCount = () => {
    const count = useSelector((state) => state.count);
  return (
    <>
      <h2>Count: {count}</h2>
    </>
  )
}

export default DisplayCount
