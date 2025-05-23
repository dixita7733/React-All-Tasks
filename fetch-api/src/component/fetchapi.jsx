import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Fetchapi = () => {
   let [Fapi, setfapi] = useState(true);

   let apibtn = () => {

    setfapi(Fapi === true ? false : true)

   }

   useEffect(() => {
        // alert("hello")
        let ulmain = document.getElementById("movieposters");
        ulmain.innerHTML = "";
        let searchitem = document.getElementById("searchitem").value;
        fetch(`http://www.omdbapi.com/?s=${searchitem}&apikey=b850ddb1`)
        .then((r) => r.json())
        .then((d) => {
            d.Search.forEach(e => {
                // console.log(e.Poster);
                let liposter = document.createElement("li");
                let imgposter = document.createElement("img")
                imgposter.src = e.Poster;

                ulmain.appendChild(liposter);
                liposter.appendChild(imgposter);
        })
    
    })}, [Fapi])

  return (
    <>
    <div className="inputbox">
        <input type="text" id="searchitem" onKeyUp={apibtn} placeholder="search movies"></input>
    </div>
    <div id="wrapper">
        <div id="content">
            <ul id="movieposters">
 
            </ul>
        </div>
    </div>
    </>
  )
}

export default Fetchapi;
