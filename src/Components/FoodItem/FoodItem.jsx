import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'

function FoodItem({image, name, description, price}) {

    const [cartCount, setCartCount] = useState(0);

  return (
    <div className='food-item'>
        <div className="food-item-image">
            <img src={image} alt="" />
            {!cartCount ? 
                <img src={assets.add_icon_white} className='add' onClick={() => setCartCount(cartCount + 1)} alt="" />
                 :
                <div className='counter'>
                    <img src={assets.remove_icon_red} onClick={() => setCartCount(cartCount - 1)} />
                    <p>{cartCount}</p>
                    <img src={assets.add_icon_green} onClick={() => setCartCount(cartCount + 1)} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <h3>{name}</h3>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="desc">{description}</p>
            <div className="price">
                <h3 className="price">${price}</h3>
                <h3>Total : ${price * cartCount}</h3>
            </div>
        </div>
    </div>
  )
}

export default FoodItem