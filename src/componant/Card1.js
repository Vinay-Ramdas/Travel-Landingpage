import React from 'react'
import Card from './Card'
import cardData from './CardData'
const Card1 = () => {
  return (
    <>
    <h1 id='Destination' className='heading'>Top Destionations</h1>
    {cardData.map(cardData => (
                 <Card 
                     key={cardData.id}
                     image={cardData.image}
                     name={cardData.name}
                     price={cardData.price}
                     des={cardData.des}
                 />
             ))}
    </>
  )
}

export default Card1