import React from 'react'
import "./collapse.scss"
import arrow from "../../assets/arrow.png"

const Collapse = ({value, index, toggleCollapse}) => {
  return (
    <div className={`collapse ${value.open ? 'open' : ''}`} key={index}>
      <div className="collapse-title-container">
        <h3 className='collapse-title'>{value.title}</h3>
        <div className={`arrow-container`} onClick={() => toggleCollapse(index)}>
          <img src={arrow} alt="arrow icon" className="arrow" />
        </div>
      </div>
      <p className="collapse-paragraphe">{value.content}</p>
    </div>
  )
};
export default Collapse