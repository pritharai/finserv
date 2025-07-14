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
import PayPremium from './component/premium'
import TaxPlanning from './component/TaxPlanning'
import ElssCalculator from './component/ELSSCalculator'
import RiskManagement from './component/Riskmanagement'
import MutualFunds from './component/MutualFunds'
import InsurancePage from './component/insurance'
import ScrollOnLink from './component/ScrollOnLink'
import FAQsPage from './component/faqs'



const App = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <>
    <ScrollOnLink/>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='sip' element={<SIP />} />
        <Route path='market' element={<MarketTicker />} />
        <Route path='partners' element={<PartnersPage/>}/>
        <Route path='mutual-fund-forms' element={<MutualFundFormsPage/>}/>
        <Route path='swpcalculator' element={<SWPCalculator/>}/>
        <Route path='calculator' element={<Calculator/>}/>
        <Route path='childmarriagecalc' element={<ChildMarriageCalculator/>}/>
        <Route path='retirementcalc' element={<RetirementCalculator/>}/>
        <Route path='childeducationcalc' element={<ChildEducationCalculator/>}/>
        <Route path='financial-planning' element={<FinancialPlanning/>}/>
        <Route path='premium' element={<PayPremium/>}/>
        <Route path='taxplan' element={<TaxPlanning/>}/>
        <Route path='elsscalculator' element={<ElssCalculator/>}/>
        <Route path='risk-management' element={<RiskManagement/>}/>
        <Route path='mutual-funds' element={<MutualFunds/>}/>
        <Route path='insurance' element={<InsurancePage/>}/>    
        <Route path='faqs' element={<FAQsPage/>}/>    
      </Route>
      
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App