import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const notify = () =>{
        toast.success('Email sent successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    } 
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bb15f878-0566-4f53-8ab0-89468da28986");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log(res.message);
            notify();
        }
        // Clear form fields by resetting the state
    };
    return (
        <div className='contact scroll-margin' id='contact'>
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" required name='name' placeholder='Enter Your name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" required name='name' placeholder='Enter Your email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" required rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Contact
