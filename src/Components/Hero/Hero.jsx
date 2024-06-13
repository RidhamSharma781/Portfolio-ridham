import React from 'react'
import './Hero.css'
import profile_img from '../../assets/IMG_9161.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Programmer", "Web Developer", "Android Developer"],
        loop: true, // Set to true to loop the animation
        typeSpeed: 70, // Typing speed in ms
        deleteSpeed: 50, // Deleting speed in ms
        delaySpeed: 1000 // Delay before starting to delete
    });
    return (
        <div className='hero' id='home'>
            <div className="hero-left">
                <h1>Hi,I am <br /> <span className='name'>Ridham Sharma</span> </h1>
                <div className="effect">
                    <p className='static'>I am a <span className='dynamic'>{text}</span>
                        <span><Cursor /></span>
                    </p>
                </div>
                <p className='bio'>
                    I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                <div className="btn-hero-left">
                    <div className="resume"><a target='_blank' href='https://drive.google.com/file/d/15hj_mSy4stz44YJUeEiUFPlJknJb4o7l/view?usp=drivesdk'>Check Resume</a></div>
                    <div className="connect"><AnchorLink offset={50} href='#contact'>Connect with me</AnchorLink></div>
                </div>
            </div>
            <div className="hero-right">
                <img src={profile_img} alt="" />

            </div>

        </div>
    )
}

export default Hero
