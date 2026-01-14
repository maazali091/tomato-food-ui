import React from 'react'
import './FoodDisplay.css'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
  return (
    <div className='food-display'>
        <h2 className="title">Top Dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
              if(category === "All" || category === item.category){
                  return <FoodItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} description={item.description} />
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay