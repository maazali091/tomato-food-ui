import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

function LoginPop({setShowLogin}) {

    const [currState, setCurrState] = useState("Login")

  return (
    <div className="login">
        <form className="login-container">
            <div className="login-title">
                <h2>{currState === "Login" ? "Login" : "Sign up"}</h2>
                <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
            </div>
            <div className="login-inputs">
                {currState === "Sign up" ?
                    <input type="name" placeholder='Your name' required />
                    : <></> }
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className="button">{currState === "Login" ? "Login" : "Create account"}</button>
            <div className="login-condition">
                <input type="checkbox"  required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <div className="account">
                {currState === "Login" ? 
                    <p>Create a new account? <b onClick={() => setCurrState("Sign up")}>Click here</b></p>
                    : <p>Already have an account? <b onClick={() => setCurrState("Login")}>Login here</b></p>}
            </div>
        </form>
    </div>
  )
}

export default LoginPop