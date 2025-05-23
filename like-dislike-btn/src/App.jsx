import './App.css'
import { useState } from 'react'

function App() {
  const [ldbtn , setLdbtn] = useState('white')

  const like_dislike = () =>{
    setLdbtn(ldbtn === 'white' ? 'red' : 'white')
        
  }
  return (
    <>
<div class='main'>
     <div className='like-dis' onClick={like_dislike}><i  class="fa-solid fa-heart" style={{color: ldbtn}} ></i></div>
</div>
    </>
  )
}

export default App
