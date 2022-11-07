import React from 'react'

const Booking = () => {
  return (
    <div id='Booking' className="booking">
      <div className="bookingdes">
        <h5>Easy and Fast</h5>
        <h1>Book Your Next Trip In <br/>3 Easy Steps</h1>
        <div className="bookingdes1">
        <div className="bookingdes2">
        <h5> Choose Destination</h5><img className='imgg' src='images/b1.png'/>
        <p>Choose your favourite place. No matter <br/>
           where you travel inside the World.</p>
         <h5>Make Payment</h5> <img className='imgg' src='images/b2.png'/>
         <p>After find your perfect spot, make your <br/>
            payment and get ready to travel.</p> 
         <h5>Reach Airport on Selected Date</h5> <img className='imgg' src='images/b3.png'/>
         <p>Lastly, you have to arrive at the airport <br/>
            on time and enjoy the vacation.</p> 
           
      </div>
      <div className="bookingbanner">
            <img src="images/bb6.png" alt="" />
            </div>
    </div>
    
    </div>
    </div>
  )
}

export default Booking