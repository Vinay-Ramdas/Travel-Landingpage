import React from 'react'

const About = () => {
  return (
    <div id='about' className="about">
      <h1>About Us</h1>
      <div className="aboutimg">
      <img src="images/about1.jpg" alt="" />
        <div className="aboutdes"> 
            <h2>We turn ordinary trips<br/> into extraordinary trips.</h2>
            <p>We are committed to offering travel services of the highest quality,<br/>
              combining our energy and enthusiasm, with our years <br/>
              of experience. Our greatest satisfaction comes in serving large <br/>
              numbers of satisfied clients who have experienced the joys and <br/>
              inspiration of travel.</p>
              <div className="aboutbtn">
                <div className="more">Read More</div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default About