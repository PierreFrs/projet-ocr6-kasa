import React from 'react'
import "./card.scss"

const Card = ({title, cover}) => {

  const cardStyle = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <div className='card' style={cardStyle}>
      <div className="linear-gradient"></div>
      <h3 className='card-title'>{title}</h3>
      </div>
  )
}

export default Card