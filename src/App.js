import React from 'react'
import Navbar from './componant/Navbar'
import Banner from './componant/Banner'
import './componant/App.css'
import './componant/App1.css'
import About from './componant/About'
import Card1 from './componant/Card1'
import Booking from './componant/Booking'
import Services from './componant/Services'
import Newsletter from './componant/Newsletter'
import Footer from './componant/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Card1/>
    <Booking/>     
    <Services/>  
    <Newsletter/> 
    <Footer/>
  </>
  )
}



export default App