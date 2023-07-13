import React from 'react'
import "./collapse.scss"

const Collapse = ({value, index, toggleCollapse}) => {
  return (
    <div className={`collapse ${value.open ? 'open' : ''}`} key={index}>
      <h3 className='collapse-title'  onClick={() => toggleCollapse(index)}>{value.title}</h3>
      <p className="collapse-paragraphe">{value.content}</p>
    </div>
  )
};
export default Collapse