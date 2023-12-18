import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// Import assets
import DesktopHero1 from '../images/desktop-image-hero-1.jpg'
import DesktopHero2 from '../images/desktop-image-hero-2.jpg'
import DesktopHero3 from '../images/desktop-image-hero-3.jpg'

import MobileHero1 from '../images/mobile-image-hero-1.jpg'
import MobileHero2 from '../images/mobile-image-hero-2.jpg'
import MobileHero3 from '../images/mobile-image-hero-3.jpg'


import ImageDark from '../images/image-about-dark.jpg'
import ImageLight from '../images/image-about-light.jpg'

// Import Icon
import ArrowIcon from '../images/icon-arrow.svg'
import AngleLeft from '../images/icon-angle-left.svg'
import AngleRight from '../images/icon-angle-right.svg'

// Import data
import content from '../content.json';  




const Home = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1025);

  // Check for resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const desktopImages = [DesktopHero1, DesktopHero2, DesktopHero3];
  const mobileImages = [MobileHero1, MobileHero2, MobileHero3];
  const images = isMobile ? mobileImages : desktopImages;

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className='page-container'>

        <section className='top-container'>
          <div className='top-left-container'>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          </div>

          <div className='btn-container'>
              <div className='btn' onClick={goToPrevImage}><img src={AngleLeft} alt="left-btn"></img></div>
              <div className='btn' onClick={goToNextImage}><img src={AngleRight} alt="right-btn"></img></div>
          </div>

          <div className='top-right-container'>

            <div className='text-container'>
              
              <h1 className='page-title'>{content.topSection[currentImageIndex].title}</h1>

              <p className='page-description'>{content.topSection[currentImageIndex].description}</p>

              <Link className='shop-link' to='#'>
                <p>Shop now</p>
                <img className='link-img' alt='arrow' src={ArrowIcon}></img>
              </Link>
            </div>


          </div>
        </section>

        <section className='bottom-container'>
          <div className='bottom-left-container'>
            <img className='bottom-left-image' src={ImageDark}></img>
          </div>
          
          <div className='bottom-center-container'>

            <div className='bottom-text-container'>
              <h1 className='bottom-text-title'>{content.bottomSection.aboutTitle}</h1>
              <p className='bottom-text-description'>{content.bottomSection.aboutDescription}</p>
            </div>
          </div>

          <div className='bottom-right-container'>
            <img className='bottom-right-image' src={ImageLight}></img>
          </div>

        </section>

        <div ></div>

      </div>
  )
}

export default Home