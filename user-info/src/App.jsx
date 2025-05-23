import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './App.css';


const App = () => {
  const [Loader, setLoader] = useState(true);

  let [user, setuser] = useState('');

  let userclick = () => {
    fetch("https://randomuser.me/api")
    .then((r) => r.json())
    .then((d) => {
     setuser(d.results[0])
    })
  }

  useEffect(() => {
     userclick();
     
     const Timer = setTimeout(() => {
      setLoader(false);
    }, 5000);

    return () => clearTimeout(Timer);

  },[])

  

  return (
    <>
     {
     Loader && 
     <div className="loader"></div>
     }

    {
    !Loader && (
      <div className="container containeronn">
      
      {user ? 
      <>
      <img src={user.picture.large}/>
      <p>{user.name.title} {user.name.first} {user.name.last}</p>
      <p>{user.email}</p>
      <p>location: city: {user.location.city} country: {user.location.country}</p>
      </>
     : <h1>Please Waite...</h1>}
      <button onClick={userclick}>Next</button><br></br>
      {/* <button id="toggle-mode">Toggle Light/Dark Mode</button> */}


     </div>
)}
    </>
  )
}

export default App

