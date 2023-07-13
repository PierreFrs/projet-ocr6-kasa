import React from 'react'
import "./collapse.scss"

const Collapse = ({value, index, toggleCollapse}) => {
  return (
    <div className={`collapse ${value.open ? 'open' : ''}`}>
      <h3 className='collapse-title'  onClick={() => toggleCollapse(index)}>{value.title}</h3>
      <div className="collapse-paragraphe-container">
        {Array.isArray(value.content) ? 
        <ul className="collapse-paragraphe">
          {value.content.map((item, i) => <li key={i} className="equipement-item">{item}</li>)} 
        </ul> :
        <p className="collapse-paragraphe">{value.content}</p>
        }
      </div>
    </div>
  )
};
export default Collapse