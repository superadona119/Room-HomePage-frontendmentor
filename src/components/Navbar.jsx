import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom";

// Import assets
import BurgerIcon from '../images/icon-hamburger.svg'
import CrossIcon from '../images/icon-close.svg'

const Navbar = () => {

  const location = useLocation();
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleMouseEnter = (index) => {
    setSelectedLink(index);
  };

  const handleMouseLeave = () => {
    setSelectedLink(null); // Reset selected link when mouse leaves the navbar
  };

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Check for bodyScroll avoid unpredictible behavior 
  useEffect(() => {
    navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
    if(!bodyScroll){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'scroll';
    }      
  })

  const handleToggle = () => {
    setNavbarExpand(prev => !prev);
  }

  return (
    <div className='navbar-container'>
      <div className={`bg-overlayer ${navbarExpand ? 'expand' : ''}`}></div>
      <img className='burger-btn' alt='burger-btn' src={BurgerIcon} onClick={handleToggle}></img>
      <p className='navbar-title'>room</p>

        <div className={`links-container ${navbarExpand ? 'expand' : ''}`}>
          <img className='close-btn' alt='close-btn' src={CrossIcon} onClick={handleToggle}></img>
          <div>
            <Link
              className={`navbar-link ${selectedLink === 0 ? 'selected' : ''}`}
              to="/"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              home
              <div className={`selector ${selectedLink === 0 ? 'selected' : ''}`}></div>
            </Link>

            <Link
              className={`navbar-link ${selectedLink === 1 ? 'selected' : ''}`}
              to="/shop"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              shop
              <div className={`selector ${selectedLink === 1 ? 'selected' : ''}`}></div>
            </Link>

            <Link
              className={`navbar-link ${selectedLink === 2 ? 'selected' : ''}`}
              to="/about"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              about
              <div className={`selector ${selectedLink === 2 ? 'selected' : ''}`}></div>
            </Link>

            <Link
              className={`navbar-link ${selectedLink === 3 ? 'selected' : ''}`}
              to="/contact"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              contact
              <div className={`selector ${selectedLink === 3 ? 'selected' : ''}`}></div>
            </Link>            
          </div>

      </div>
    </div>
  )
}

export default Navbar