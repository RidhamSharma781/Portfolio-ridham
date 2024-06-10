import React from 'react'
import './Navbar.css'
import github from '../../assets/github-mark-white.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>R.</h1>

            <ul className="nav-menu">
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
