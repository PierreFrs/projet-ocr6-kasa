import React from 'react'
import { useLocation } from 'react-router-dom';
import "./banner.scss";


const Banner = () => {
  // Handle the two backgrounds if on home page or about page
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    
    <div className={`banner ${isHomePage ? "background1" : "background2"}`}>
      {isHomePage && <h1 className='main-title'>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner