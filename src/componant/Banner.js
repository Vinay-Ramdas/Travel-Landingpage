import React from 'react'

const banner = () => {
  return (
    <div className="bannercontainer">
    <div className="bimg">
         <img className='bimg' src="images/banner.png" alt="banner" />
         </div>
      <div className="banner">
          <div className="banner-des">
            <h4>Best Destinations around the world</h4>
            <h1>Travel, enjoy<br/>and live a new <br/>and full life</h1>
            <p>Built wicket longer admire do barton vanity itself do in it.
                <br/>preferred to sportsman it engrossed listening. park gate
                <br/>sell they west hard for the.
            </p>
           
           <div className="button">
            <a className='btn' href="">Find Out More</a>
            <div className='round-circle'> Play Demo
              <img src="images/play2.png" alt="" />
            </div>
           </div>
          </div>
        </div> 
      </div>
    
  )
}

export default banner