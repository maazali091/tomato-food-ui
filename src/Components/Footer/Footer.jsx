import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='contact'>
        <div className="footer-top">
            <div className="left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Magni incidunt, delectus 
                    et a nobis ullam, enim autem recusandae vitae
                     dolores fugiat unde saepe, laboriosam labore.</p>
                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="center">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="right">
                <h2>GET IN TOUCH</h2>
                <div className="touch">
                    <p>+1-212-456-789</p>
                    <p>contact@Tomato.com</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="copyright">Copyright 2026 &copy; Tomato.com &bull; Alls Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer