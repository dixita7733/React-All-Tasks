import React, { useEffect, useState } from 'react'

const showbox = () => {
  let [showdiv , setshowdiv] = useState(true)
  let handlediv = () => {
      setshowdiv(showdiv == true ? false : true)
  }

  useEffect(() => {
    let div = document.createElement("div");
    div.classList.add("mydiv");
    document.body.appendChild(div)
  },[showdiv])
  return (
    <>
        <button onClick={handlediv}>Add div</button>
    </>
  )
}

export default showbox

