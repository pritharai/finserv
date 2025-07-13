import {Routes, Route} from 'react-router-dom'
import React, { useEffect } from 'react'
import  Layout from './component/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import PageNotFound from './component/PageNotFound'
import SIP from './component/SIP'
import MarketTicker from './component/MarketTicker'
import PartnersPage from './pages/Partners'
import MutualFundFormsPage from './pages/MFforms'
import SWPCalculator from './component/SWPCalculator'
import Calculator from './pages/Calculator'
import ChildMarriageCalculator from './component/childMarriage'
import RetirementCalculator from './component/RetirementCalc'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ChildEducationCalculator from './component/childEducation'
import FinancialPlanning from './component/FinancialPlanning'



const App = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='sip' element={<SIP />} />
        <Route path='market' element={<MarketTicker />} />
        <Route path='partners' element={<PartnersPage/>}/>
        <Route path='mfforms' element={<MutualFundFormsPage/>}/>
        <Route path='swpcalculator' element={<SWPCalculator/>}/>
        <Route path='calculator' element={<Calculator/>}/>
        <Route path='childmarriagecalc' element={<ChildMarriageCalculator/>}/>
        <Route path='retirementcalc' element={<RetirementCalculator/>}/>
        <Route path='childeducationcalc' element={<ChildEducationCalculator/>}/>
        <Route path='financial-planning' element={<FinancialPlanning/>}/>
      </Route>
      
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App