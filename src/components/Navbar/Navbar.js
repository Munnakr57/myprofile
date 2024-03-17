import React, { useState } from 'react';
import './Navbar.css';
import logo  from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
  

   <nav className='navbar'>
    <img src={logo} alt='Logo' className='logo' />
    <div className='desktopMenu'>
   <Link activeClass='active' spy={true}  to='intro' smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
   <Link activeClass='active' spy={true} to='skillsSection' smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
   <Link activeClass='active' spy={true} to='myprojects' smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
   <Link activeClass='active' spy={true} to='ClientsContact' smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients</Link>
    </div>
    <button className='desktopMenuBtn' onClick={()=> {
      document.getElementById('contactform').scrollIntoView({behavior: 'smooth'});
    }}>
        <img src={contact} alt='contact' className='desktopMenuImg'/> Contact Me
    </button>

    <img src={menu} alt='menu' className='mobileMenu' onClick={()=> setShowMenu(!showMenu)} />
    <div className='navigationMenu' style={{display: showMenu? 'flex':'none'}}>
   <Link activeClass='active' spy={true}  to='intro' smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(!false)}>Home</Link>
   <Link activeClass='active' spy={true} to='skillsSection' smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(!false)}>About</Link>
   <Link activeClass='active' spy={true} to='myprojects' smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(!false)}>Portfolio</Link>
   <Link activeClass='active' spy={true} to='ClientsContact' smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(!false)}>Clients</Link>
   <Link activeClass='active' spy={true} to='ClientsContact' smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(!false)}>Contact us</Link>
    </div>
   </nav>
  )
}

export default Navbar
