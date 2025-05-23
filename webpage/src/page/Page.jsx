import React from 'react'
import Bannerright from '../assets/banner-1.webp'
import product1 from '../assets/product1.webp'
import product2 from '../assets/product2.webp'
import product3 from '../assets/product-3.webp'
import product4 from '../assets/product-4.webp'
import product5 from '../assets/product-5.webp'
import product6 from '../assets/product-6.webp'
import productr1 from '../assets/productr1.webp'
import productr2 from '../assets/productr2.webp'
import productr3 from '../assets/productr3.webp'
import productr4 from '../assets/productr4.webp'
import productr5 from '../assets/productr5.webp'
import Work_1 from '../assets/work-1.svg'
import Work_2 from '../assets/work-2.svg'
import Work_3 from '../assets/work-3.svg'
import Work_4 from '../assets/work-4.svg'
import Team_1 from '../assets/team-1.jpg'
import Team_2 from '../assets/team-2.jpg'
import Team_3 from '../assets/team-3.jpg'
import Team_4 from '../assets/team-4.jpg'


import Border from '../usable-component/border'
import Button from '../usable-component/Button'
import Footer from '../footer/Footer'

const page = () => {
  // var Swiper = new Swiper(".mySwiper", {
  //   slidesperView: 4,
  //   centeredSlides: true,
  //   spaceBetween: 30,
  //   grabCursor: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });
  return (
    
    <>
      <section className='banner-container'>
          <div className='banner-left'>
          <div className="left-container-text">
             <h1>WITH</h1><h1>
	<span>
		<span>BINABOX</span>
		<span>NFTBOX</span>
		<span>BOXNFT</span>
	</span>
</h1> 
           </div>
           <h1>EXpLORE NFT COLLECTION</h1>

           <p className='banner-para'>We are the best way to check the rarity of NFT collection</p>
           <div className='banner-numbers'>
           <div className='left-num'>
            <h1 className='num' data-count="2240">0</h1>
            <p className='numbanner'>Total Item</p>
           </div>
           <div className='left-num'>
            <h1 className='num' data-count="2000">0</h1>
            <p className='numbanner'>profiles Whitelisted</p>
           </div>
           </div>
           <div className='banner-btns'>
            <button>CONNECT WALLET</button>
            <button>WHITELIST NOW</button>
           </div>
          </div>
          <div className='banner-right'>
             <img src={Bannerright}></img>
          </div>
      </section>

      <div className="marquee">
         <div className="track">
           <div className="content">&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX&nbsp;&nbsp;&nbsp;&nbsp;BINABOX &nbsp;&nbsp;&nbsp;&nbsp; BINABOX</div>

       </div>
      </div>

      <section className='about-container'>
        <div className='about-head'>
          <h1>ABOUT US</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
          <div className='aboutnums'>
            <div className='leftan'>
              <h3>Total Item</h3>
              <h1 className='num' data-count="2240">0</h1>
              </div>
            <div className='rightan'>
              <h3>profiles Whitelisted</h3>
              <h1 className='num' data-count="2000">0</h1>
              </div>
          </div>
        </div>

        <div className='about-content'>
          <div className=' about-box border-box'>
            <Border/>
            <h1 className='aboutnum'>01</h1>
            <h2 className='abhead'>HIGH QUALITY</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>

          <div className=' about-box border-box'>
          <Border/>
            <h1 className='aboutnum'>02</h1>
            <h2 className='abhead'>BIG COLLECTION</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>

          <div className=' about-box border-box'>
          <Border/>
            <h1 className='aboutnum'>03</h1>
            <h2 className='abhead'>TOp RESOURCE</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>

          <div className=' about-box border-box '>
          <Border/>
            <h1 className='aboutnum'>04</h1>
            <h2 className='abhead'>BIG COMMUNITY</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </div>
      </section>

  <div className="slider leftslide">
	<div className="slide-track">
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={product1}></img>
            <p>Name #01</p>
    </div>
		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={product2}></img>
            <p>Name #01</p>
    </div>		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={product3}></img>
            <p>Name #01</p>
    </div>		
    </div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={product4}></img>
            <p>Name #01</p>
    </div>
    		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={product5}></img>
            <p>Name #01</p>
    </div>
    		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={product6}></img>
            <p>Name #01</p>
    </div> 
    		</div>


	</div>
</div>

<div className="slider rightslide">
	<div className="slide-track">
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={productr1}></img>
            <p>Name #01</p>
    </div>
		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={productr2}></img>
            <p>Name #01</p>
    </div>		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={productr3}></img>
            <p>Name #01</p>
    </div>		
    </div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={productr4}></img>
            <p>Name #01</p>
    </div>
    		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={productr5}></img>
            <p>Name #01</p>
    </div>
    		</div>
		<div className="slide">
    <div className='product-box border-box '>
          <Border/>
            <img src={productr1}></img>
            <p>Name #01</p>
    </div> 
    		</div>


	</div>
</div>

<div className='work'>
  <div className='workhead'>
  <h1>HOW TO <span>BINABOX</span> WORK</h1>
  </div>

  <div className='workbox'>
    <div className='wbox border-box'>
    <Border/>
       <img src={Work_1}></img>
       <h3>CONNECT THE WALLET</h3>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    </div>

    <div className='wbox border-box'>
    <Border/>
       <img src={Work_2}></img>
       <h3>SELCE THE QUALITY</h3>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    </div>

    <div className='wbox border-box'>
    <Border/>
       <img src={Work_3}></img>
       <h3>CONFORM THE TRANSACTION</h3>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    </div>

    <div className='wbox border-box'>
    <Border/>
       <img src={Work_4}></img>
       <h3>RECEIVE YOUR NFTS</h3>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    </div>
  </div>
</div>

<div className='work'>
  <div className='workhead'>
  <h1>OUR TEAM</h1>
  </div>

  <div className='workbox team'>
    <div className='wbox border-box'>
    <Border/>
       <img src={Team_1}></img>
       <h3>Ralph Edwards</h3>
       <p>Founder</p>
    </div>

    <div className='wbox border-box'>
    <Border/>
       <img src={Team_2}></img>
       <h3>Jason Smith</h3>
       <p>Co - Founder</p>
    </div>

    <div className='wbox border-box'>
    <Border/>
       <img src={Team_3}></img>
       <h3>Tony Wings</h3>
       <p>Web Designer</p>
    </div>

    <div className='wbox border-box'>
    <Border/>
       <img src={Team_4}></img>
       <h3>Esther Howard</h3>
       <p>Project Manager</p>
    </div>
  </div>
</div>

<div className='join_community'>
  <div className='join-content'>
    <h1>JOIN OUR COMMUNITY</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <Button/>
  </div>
</div>

<Footer/>

    </>
  )
}

export default page
