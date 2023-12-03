
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from '../src/conponents/Header/Navbar'
import Footer from './conponents/Footer'
import { Banner } from './conponents/Header/Banner'
import bg from '../src/assets/LogoCLB/bg.jpg';

function App() {


  return (
    <>
      <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar/>
      <Banner/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
