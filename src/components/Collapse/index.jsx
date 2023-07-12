import React, {useState} from 'react'
import "./collapse.scss"
import arrow from "../../assets/arrow.png"

const Collapse = ({item, index}) => {
  

  return (
    <div className={`collapse ${item.open ? 'open' : ''}`} key={index}>
      <div className="collapse-title-container">
        <h3 className='collapse-title'>{item.title}</h3>
        <div className={`arrow-container`}>
          <img src={arrow} alt="arrow icon" className="arrow" />
        </div>
      </div>
      
      <p className="collapse-paragraph">{item.content}</p>
    </div>
  )
};
export default Collapse