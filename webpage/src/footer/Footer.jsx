import React from 'react'
import Logo from '../assets/logo_dark.webp'

const Footer = () => {
  return (
    <>
      
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-logo">
                    <img src={Logo} alt="BINABOX"></img>
                    <p>We are the best way to check the rarity of NFT collection.</p>
                </div>
                <div class="footer-links">
                    <h3>SUBSCRIBE</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>COMPANY</h3>
                    <ul>
                        <li><a href="#">About Us 2</a></li>
                        <li><a href="#">Road Map 2</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Item Details</a></li>
                    </ul>
                </div>
                <div class="footer-subscribe">
                    <h3>SUBSCRIBE</h3>
                    <div class="subscribe-box">
                        <input type="email" placeholder="Enter your email"></input>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>BINABOX 2025 - ALL rights reserved</p>
                <div class="social-icons">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-telegram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
