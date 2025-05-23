import React from 'react'
import { useEffect } from 'react'

const Sessionstorage = () => {
    useEffect(() => {
     sessionStorage.setItem("name" , "dishu")
    },[])
  return (
    <>
      <h1>Session Storage</h1>
    </>
  )
}

export default Sessionstorage
