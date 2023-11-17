
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './conponents/Navbar'
import Footer from './conponents/Footer'
function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
