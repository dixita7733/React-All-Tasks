import { useRef, useState } from 'react'
import './App.css'

function App() {
  let [play , setplay] = useState(false)
  let [ismute, setmute] = useState(false)
  const handlevideo = useRef()

  let handleplay = () => {
    handlevideo.current.play()
    setplay(true)
  }
  

  let handlepause = () => {
    handlevideo.current.pause()
    setplay(false)
  }

  let pluscurrenttime = () => {
    handlevideo.current.currentTime += 5;
  }

  let mincurrenttime = () => {
    handlevideo.current.currentTime -= 5;
  }

  let mute = () => {
    handlevideo.current.muted = !handlevideo.current.muted;

    if(handlevideo.current.muted){
      setmute(true)
    }
    else{
      setmute(false)
    }
  }
  return (
    <>
    <div className='main'>
    <div className='video-container'>
    <video ref={handlevideo}>
      <source src='https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4'>
      </source>
    </video>
    </div>

    <div className='controls-container'>
<div className='left-btn'>
    {play ? (
  <button onClick={handlepause}><i className="fas fa-pause"></i> </button>
) : (
  <button onClick={handleplay}><i className="fas fa-play"></i> </button>
)}

<button onClick={mincurrenttime}><i className="fas fa-backward"></i></button>
<button onClick={pluscurrenttime}><i className="fas fa-forward"></i></button>
</div>

<div className='right-btn'>
<button onClick={mute}>
  {ismute ? (<i className="fas fa-volume-mute"></i> 
  ) : ( <i class="fa-solid fa-volume-high"></i> )}</button>
</div>
</div>
</div>
    </>
  )
}

export default App
