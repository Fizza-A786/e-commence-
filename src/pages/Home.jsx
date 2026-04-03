import React from 'react'
import Hero from '../components/HomePages/Hero'
import Logoswiper from '../components/HomePages/Logoswiper'
import Categories from '../components/HomePages/Categories'
import DiscountBanner from '../components/HomePages/DiscountBanner'
import ReviewProducts from '../components/HomePages/ReviewProducts'
import AboutPage from '../components/HomePages/AboutPage'

const Home = () => {
  return (
    <div>
      < Hero/>
      <Logoswiper/>
      <Categories/>
      <AboutPage/>
      <DiscountBanner/>
      <ReviewProducts/>
      
    </div>
  )
}

export default Home