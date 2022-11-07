import React from 'react'

const Newsletter = () => {
  return (
    <div class="newscontainer">
        <div className="newsletter">
            <h2>Subscribe to get information, latest news and other 
                <br/> interesting offers</h2>
        </div>
        <form>
        <div className="form">
        <input className='form1' type="email" placeholder='Enter email'/>     
                <div className="newsbtn">
                    Subscribe
                </div>
                </div>
                </form>
               
    </div>
  )
}

export default Newsletter