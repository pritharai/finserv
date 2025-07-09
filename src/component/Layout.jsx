import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='p-[1rem] mt-20'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout