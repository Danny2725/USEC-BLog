
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from '../src/conponents/Header/Navbar'
import Footer from './conponents/Footer'
import { Banner } from './conponents/Header/Banner'
function App() {


  return (
    <>
    <div style={{backgroundColor:'#030c1a'}}>
      <Navbar/>
      <Banner/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
