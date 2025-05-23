import React from 'react'
import './App.css'
import { useState , useEffect } from 'react'
import Loader from './Loader';
import Setname from './Setname';

const App = () => {
  let [load , setload] = useState(true);
  let [name , setname] = useState("")

  useEffect(() => {
      setTimeout(() => {
         setload(false);
         setname("dishu")
      }, 2000);
  },[])
  return (
    <>
      {load ? <Loader />
      :
      <Setname n={name}/> }
    </>
  )
}

export default App
