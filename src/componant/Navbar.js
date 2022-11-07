import {useState} from 'react'
import React from 'react'
import{Link} from 'react-scroll'
import {FaTimes,FaBars} from "react-icons/fa";
const Navbar = () => {
  const [click,setClick] = useState(false);
  const [navbar,setNavbar] = useState(false);
  const handlClick = () => setClick(!click);
  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
    <div className={navbar ? 'navbar active'  : 'navbar'}  >
    <img  className='nav-img' src="images/travel11.png" alt="" />
    <div  className="header"  >
      <ul  className={click ? 'nav-menu active':'nav-menu'}>
        <li> <Link  to="home" spy={true} smooth={true} offset={-130} duration={500} >Home</Link></li>
        <li> <Link  to="about" spy={true} smooth={true} offset={-80} duration={500} >Aboutus</Link> </li>
        <li> <Link  to="Destination" spy={true} smooth={true} offset={-80} duration={500} >Destination</Link></li>
        <li> <Link  to="Booking" spy={true} smooth={true} offset={-100} duration={500} >Booking</Link></li>
        <li> <Link  to="Services" spy={true} smooth={true} offset={-120} duration={500} >Services</Link></li>
        <a className='signup' href="">Sign Up</a>
      </ul>
      </div>
      <div className="nav-bar" onClick={handlClick}>
        {click ?
           (<FaTimes size={25} style={{color:"black"}}/>):
           (<FaBars size={25} style={{color:"black"}}/>) 
        }
      </div>
      </div>
     </>
  )
}

export default Navbar