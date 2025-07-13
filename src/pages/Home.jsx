import React from 'react'
import Header from '../component/Header'
import About from '../component/About'
import ChooseUsCard from '../component/ChooseUsCard'
import Social from '../component/Social'
// import FaqSection from '../component/faq'
import Approach from '../component/Approach'
import Objective from '../component/Objective'
import PartnersSection from '../component/Policies'
import AchievementsSection from '../component/achievements'
import Testimonials from '../component/Testimonials'
const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Objective/>
      <AchievementsSection/>
      <ChooseUsCard/>
      <Approach/>
      <Testimonials/>
      <PartnersSection/>
      <Social/>
    </>
  )
}

export default Home