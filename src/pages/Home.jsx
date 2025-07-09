import React from 'react'
import Header from '../component/Header'
import About from '../component/About'
import ChooseUsCard from '../component/ChooseUsCard'
import Social from '../component/Social'
// import FaqSection from '../component/faq'
import Approach from '../component/Approach'
const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <ChooseUsCard/>
      <Approach/>
      <Social/>
    </>
  )
}

export default Home