import React from 'react'
import "./collapse.scss"

const Collapse = ({value, index, toggleCollapse}) => {
  return (
    <div className={`collapse ${value.open ? 'open' : ''}`}>
      <h3 className='collapse-title'  onClick={() => toggleCollapse(index)}>{value.title}</h3>
      {Array.isArray(value.content) ? 
        value.content.map((item, i) => <p key={i} className="collapse-paragraphe">{item}</p>) :
        <p className="collapse-paragraphe">{value.content}</p>}
    </div>
  )
};
export default Collapse