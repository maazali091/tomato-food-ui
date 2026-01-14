import React from 'react'
import { assets } from '../../assets/assets' 
import './SearchBar.css'

function SearchBar({setShowSearch}) {
  return (
    <div className='search-bar'>
        <div className="search-bar-content">
            <img src={assets.cross_icon} onClick={() => setShowSearch(false)} className="close" />
            <input type="seach" placeholder='Search any food here'  />
            <img src={assets.search_icon} alt="" />
        </div>
    </div>
  )
}

export default SearchBar