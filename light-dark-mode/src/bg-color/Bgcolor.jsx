import React from 'react'
import { useState } from "react";


const Bgcolor = () => {
    const [color, setColor] = useState('black');

   let light = () => {
    setColor(color === 'black' ? 'pink' : 'black')
   }
  return (
    <>

      <div className="bg-color" style={{backgroundColor:color}}>
      <label className="switch">
        <input className="switch__input" type="checkbox" onClick={light} ></input>
        <span className="switch__slider"></span>
      </label>
      </div>
    </>
  )
}

export default Bgcolor



