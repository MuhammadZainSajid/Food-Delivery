import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login'>
        <form className='login-container'>
            <div className="title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="inputs">
                {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className='button'>{currState}</button>
            <div className="condition">
                <input type="checkbox" required />
                <p>I agree to the terms and conditions</p>
            </div>
            <p>{currState === "Login" ? "Don't have an account?" : "Already have an account?"} <a className='link' onClick={() => setCurrState(currState === "Login" ? "Sign Up" : "Login")}>{currState === "Login" ? "Sign Up" : "Login"}</a></p>
        </form>
    </div>
  )
}

export default Login