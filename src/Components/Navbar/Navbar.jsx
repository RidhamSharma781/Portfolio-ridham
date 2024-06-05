import React from 'react'
import './Navbar.css'
import github from '../../assets/github-mark-white.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>R.</h1>

            <ul className="nav-menu">
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>

            <div className="github">
                <a href="https://github.com/RidhamSharma781" target="_blank"><img src={github} alt="" /></a>
                <a href="https://github.com/RidhamSharma781" target="_blank">Github Profile</a>
            </div>
        </div>
    )
}

export default Navbar
