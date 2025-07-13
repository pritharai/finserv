import {Routes, Route} from 'react-router-dom'
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



const App = () => {
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
      </Route>
      
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App