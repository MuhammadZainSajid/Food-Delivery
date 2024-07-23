import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda at accusamus perspiciatis consequuntur esse explicabo corporis, ut impedit aliquam fugiat officia, pariatur rerum consectetur corrupti eaque expedita sit? Ratione, exercitationem.</p>
                <div className="socials">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+92 300 7860160</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='copyright'>Copyright 2024 © Tomato.com - All Rights Reserved</p>
        <p className='copyright'>Developed By Muhammad Zain Sajid</p>
    </div>
  )
}

export default Footer