import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Get in touch</h1>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out. Looking forward to connecting with you!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>ridhamsharma781@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 7710186061</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Amritsar,Punjab</p>
                        </div>
                    </div>
                </div>
                <form  className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name='name' placeholder='Enter Your email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
