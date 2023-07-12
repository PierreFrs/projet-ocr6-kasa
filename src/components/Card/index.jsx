import React from 'react'
import "./card.scss"

const Card = ({title}) => {
  return (
    <div className='card'>
      <h3 className='card-title'>{title}</h3>
      </div>
  )
}

export default Card