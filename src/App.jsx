import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Explore from './Components/Explore/Explore'
import Home from './pages/Home/Home'
import LoginPop from './Components/LoginPop/LoginPop'
import SearchBar from './Components/SearchBar/SearchBar'
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer/Footer'

function App() {

  const [showLogin,  setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <BrowserRouter basename='/tomato-food-app'>
        <Navbar setShowLogin={setShowLogin} setShowSearch={setShowSearch} />
        {showSearch ? <SearchBar setShowSearch={setShowSearch} /> : <></>}
        {showLogin ? <LoginPop showLogin={showLogin} setShowLogin={setShowLogin} /> : <></>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
