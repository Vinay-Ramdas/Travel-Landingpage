import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerhead">
        <div className="row">
            <div className="col">
                <img className='colimg' src="images/travel11.png" alt="" />
                <p>Book your trip in minute, 
                get full Control <br/> for much longer.</p>
            </div>
            <div className="col">
                <h4>Company</h4>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
            </div>
           
            <div className="col">
                <h4>Contact</h4>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliate</li> 
            </div>
            <div className="col">
                <h4>More</h4>
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
            </div>
          
        </div>
        <p className='right'>
            &copy;{new Date().getFullYear()} Travels.. | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
   </div>
  )
}

export default Footer