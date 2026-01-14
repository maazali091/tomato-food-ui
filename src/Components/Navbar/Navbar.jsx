import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

function Navbar({showLogin, setShowLogin, setShowSearch}) {

    const [menu, setMenu] = useState('home');

  return (
    <nav className="navbar" id='home'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul>
            <li><Link to='/'><a href="#home" onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}>home</a></Link></li>
            <li><a href="#explore" onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a></li>
            <li><a href="#app-download" onClick={()=> setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>mobile-app</a></li>
            <li><a href="#contact" onClick={()=> setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact us</a></li>
        </ul>
        <div className="right">
            <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="" />
            <Link to='/cart'><img src={assets.basket_icon} alt="" /> </Link>
            <button className={showLogin ? "active" : ""} onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar