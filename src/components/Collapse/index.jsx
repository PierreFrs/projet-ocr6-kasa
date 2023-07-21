import React, { useRef, useEffect, useState } from 'react';
import "./collapse.scss"

const Collapse = ({value, index, toggleCollapse}) => {
  // Hooks :
  // Handle the closing, opening and animation of the collapse component
  const contentRef = useRef();
  // Handle the height of component, default state is 0px (destructured)
  const [maxHeight, setMaxHeight] = useState('Opx');
  // Handle the effect when cosing/opening collapse
  useEffect(() => {
    if (value.open) {
      // Sets the height of the collapse paragraph container
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
    // dependancy table (effect is triggered only when collapse is open)
  }, [value.open]);


  return (
  <div className="collapse-container">
    {/* The opening is triggered in JS but the arrow is with plain CSS : keeps things simple */}
    <div className={`collapse ${value.open ? 'open' : ''}`} >
      <h3 className="collapse-title">
        {value.title}
        <div className="collapse-arrow" onClick={() => toggleCollapse(index)} />
      </h3>
      <div className="collapse-paragraphe-container" style={{ maxHeight }}>
        <div ref={contentRef}>
          {/* If content is an array, triggers list collapse */}
          {Array.isArray(value.content) ? (
            <ul className="collapse-paragraphe">
              {value.content.map((item, i) => (
                <li key={i} className="equipement-item">{item}</li>
              ))}
            </ul>
          ) : (
            // else simple paragraph
            <p className="collapse-paragraphe">{value.content}</p>
          )}
        </div>
      </div>
    </div>
  </div>

  )
};
export default Collapse