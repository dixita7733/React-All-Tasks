import React from 'react'
import { useEffect } from 'react'

const Localstorage = () => {

  useEffect(() => {
     localStorage.setItem("Name" , "dishu")
  }, [])
  return (
    <>
      <h1>Local Storage</h1>
    </>
  )
}

export default Localstorage
