import React, { useRef } from 'react'
import './Navbar.css'
import github from '../../assets/github-mark-white.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const menuRef = useRef();

    const openMenu = ()=>{
        menuRef.current.style.right = '0';
    }
    const closeMenu = ()=>{
        menuRef.current.style.right = '-350px';
    }
    return (
        <div className='navbar'>
            <h1>R.</h1>
            <img src={menu_open} onClick={openMenu} className='nav-menu-open' alt="" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} className='nav-menu-close' alt="" />
            <AnchorLink className='anchor-link' offset={50} href='#home' ><li>Home</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#skills'><li>Skills</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50}  href='#projects'><li>Projects</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#education'><li>Education</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><li>Contact</li></AnchorLink>
            </ul>

            <div className="github">
                <a href="https://github.com/RidhamSharma781" target="_blank"><img src={github} alt="" /></a>
                <a href="https://github.com/RidhamSharma781" target="_blank">Github Profile</a>
            </div>
        </div>
    )
}

export default Navbar
