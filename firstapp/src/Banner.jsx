import React from 'react'
import Bannerimg from './assets/bannerrr.webp'

const Banner = () => {
  return (
    <>
     <section class="ban_sec">
		<div class="container">
			<div class="ban_img">
	   <img src={Bannerimg} alt="banner" border="0"/>
				<div class="ban_text">
					<strong>
						<span>Meeting current</span><br></br> needs now
					</strong>
					<p>You can prioritize a child’s mental, emotional, <br></br>
						behavioral, and physical health </p>
					<a href="#">Lend a hand</a>
				</div>
			</div>
		</div>
	  </section>

    </>
  )
}

export default Banner
