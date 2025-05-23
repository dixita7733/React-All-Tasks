import React from 'react'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const Cokkies = () => {
    useEffect(() => {
        Cookies.set("name" , "dishu", {expires : 2})
     },[])
     
  return (

    <>
      <h1>Cokies</h1>
    </>
  )
}

export default Cokkies
