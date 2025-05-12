import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const[sticky, setSticky]= useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 80 ? setSticky(true): setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu=()=>{
    setMobileMenu(!mobileMenu);
  }

  const handleNavClick = (to) => {
    if (!isHomePage) {
      navigate(to);
    }
    setMobileMenu(false);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <RouterLink to="/"><img src={logo} alt="" className="logo" /></RouterLink>
        <ul className={mobileMenu ? 'mobile-menu-active' : 'hide-mobile-menu'}>
            {isHomePage ? (
              <>
                <li><ScrollLink onClick={() => setMobileMenu(false)} to='hero' smooth={true} offset={0} duration={600}>Home</ScrollLink></li>
                <li><ScrollLink onClick={() => setMobileMenu(false)} to='program' smooth={true} offset={-260} duration={600}>Program</ScrollLink></li>
                <li><ScrollLink onClick={() => setMobileMenu(false)} to='about' smooth={true} offset={-95} duration={600}>About us</ScrollLink></li>
                <li><ScrollLink onClick={() => setMobileMenu(false)} to='campus' smooth={true} offset={-260} duration={600}>Campus</ScrollLink></li>
                <li><ScrollLink onClick={() => setMobileMenu(false)} to='testimonials' smooth={true} offset={-260} duration={600}>Testimonials</ScrollLink></li>
                <li><ScrollLink onClick={() => setMobileMenu(false)} to='contact' smooth={true} offset={-240} duration={600} className='btn'>Contact us</ScrollLink></li>
              </>
            ) : (
              <>
                <li><RouterLink onClick={() => handleNavClick('/')} to="/">Home</RouterLink></li>
                <li><RouterLink onClick={() => handleNavClick('/terms')} to="/terms">Terms</RouterLink></li>
                <li><RouterLink onClick={() => handleNavClick('/privacy')} to="/privacy">Privacy</RouterLink></li>
              </>
            )}
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar