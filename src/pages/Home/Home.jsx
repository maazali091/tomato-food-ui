import React, { useState } from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import Explore from '../../Components/Explore/Explore'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';

function Home() {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Hero />
        <Explore category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  )
}

export default Home