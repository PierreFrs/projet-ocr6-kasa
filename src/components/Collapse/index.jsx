import React, { useRef, useEffect, useState } from 'react';
import "./collapse.scss"

const Collapse = ({value, index, toggleCollapse}) => {
  const contentRef = useRef();
  const [maxHeight, setMaxHeight] = useState('Opx');
  useEffect(() => {
    if (value.open) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [value.open]);


  return (
    <div className={`collapse ${value.open ? 'open' : ''}`} >
      <h3 className='collapse-title'>
        {value.title}
        <div className='collapse-arrow' onClick={() => toggleCollapse(index)} />
      </h3>
      <div className="collapse-paragraphe-container" style={{ maxHeight }}>
        <div ref={contentRef}>
          {Array.isArray(value.content) ? 
        <ul className="collapse-paragraphe">
          {value.content.map((item, i) => <li key={i} className="equipement-item">{item}</li>)} 
        </ul> :
        <p className="collapse-paragraphe">{value.content}</p>
        }
        </div>
        
      </div>
    </div>
  )
};
export default Collapse