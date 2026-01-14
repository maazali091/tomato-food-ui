import React from 'react'
import { menu_list } from '../../assets/assets'
import './Explore.css'

function Explore({category, setCategory}) {
  return (
    <div className='explore' id='explore'>
        <div className="explore-top">
            <h2>Explore our menu</h2>
            <p>Choose from a diverse menu featuring a delectable
                 array of dishes. Our mission is to satisfy your
                 cravings and elevate your dining experience,
                 one delicious meal at a time.</p>
        </div>
        <div className="explore-bottom">
            {menu_list.map((item, index) => {
                return (
                    <div className="explore-menu-item" onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} >
                        <img className={category === item.menu_name ? "active" : "" } src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Explore