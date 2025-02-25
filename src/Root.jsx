import { Outlet } from 'react-router-dom'
import './Root.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function Root() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Root
