import {Routes, Route} from 'react-router-dom'
import  Layout from './component/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import PageNotFound from './component/PageNotFound'
import SIP from './pages/SIP'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='sip' element={<SIP />} />
      </Route>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default App