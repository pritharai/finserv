import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppButton from './Whatsapp'
import ScrollToTopButton from './ScrollToTop'
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='mt-20'>
        <Outlet />
        <ScrollToTopButton/>
      </main>
      <Footer />
      <WhatsAppButton/>
    </>
  )
}

export default Layout