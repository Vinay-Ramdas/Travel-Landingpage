import React from 'react';
function Card(props) {
  return (

<>
      <div className="cardContainer">
        <div key={props.id} className='cardbody'>
          <img src={props.image} alt="." className='cardimage' />
          <h5 className='cardname'>{props.name} <a className="cardprice">{props.price}</a> </h5>
          <p className='carddes'>{props.des}</p>
        </div>
      </div>

    </>

    
  );
}
    
  

export default Card