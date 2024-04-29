import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css'; 
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.jpg'
import m4 from '../images/m4.jpg'
import m5 from '../images/m5.jpg'
import m6 from '../images/m6.jpg'
import m7 from '../images/m7.jpg'

const Footer = () => {
    const submitForm = () => {
        document.querySelector('form').submit();
    }

    const validateForm = (event) => {
        event.preventDefault(); 
        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("error").innerText = "Please enter a valid email address";
            return false;
        }
        return true;
    }

    const openOverlay = (imageSrc) => {
        const overlay = document.getElementById('overlay');
        const overlayImg = document.getElementById('overlay-img');
        overlay.style.display = 'flex';
        overlayImg.src = imageSrc;
    }

    const closeOverlay = () => {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }

    return (
        <div className="black-background">
            <div className="black-part"></div>
            <div className="black-part">
                <h3><b>DIESEL CARE</b></h3>
                <hr />
                <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                <button className='footerbutton'>ABOUT US</button>
            </div>
            <div className="black-part">
                <h3><b>NEWSLETTER</b></h3>
                <hr />
                <p>Subscribe our newsletter to get our latest update & news</p>
                <form action="#" onSubmit={validateForm}>
                    <div className="email-container">
                        <input type="email" id="email" className="email-input" placeholder="Enter your email..." />
                        <div className="telegram-symbol" onClick={submitForm}>
                            <i className="fab fa-telegram-plane"></i>
                        </div>
                    </div>
                </form><br />
                <div className="social-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className="black-part">
                <h3><b>HEAD OFFICE:</b></h3>
                <hr />
                <p>
                    <i className="fas fa-map-marker-alt" style={{ color: 'white' }}></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, repellendus.<br /><br />
                    <i className="fas fa-phone" style={{ color: 'white', transform: 'rotate(10deg)' }}></i> Ph: 9843544970 || Mob: 9843044970<br /><br />
                    <u> Open Hours:</u><br /> Monday - Saturday: 10 am - 7 pm, Sunday: CLOSED
                </p>
            </div>
            <div className="black-part">
                <h3><b>INSTAGRAM</b></h3>
                <hr />
                <div className="instagram-container">
                    <img src={m1} alt="Image 1" onClick={() => openOverlay('o1.png')} />
                    <img src={m2} alt="Image 2" onClick={() => openOverlay('o2.png')} />
                    <img src={m3} alt="Image 3" onClick={() => openOverlay('o3.png')} />
                    <img src={m4} alt="Image 4" onClick={() => openOverlay('o4.png')} />
                    <img src={m5} alt="Image 5" onClick={() => openOverlay('o5.png')} />
                    <img src={m6} alt="Image 6" onClick={() => openOverlay('o6.png')} />
                </div>
            </div>
            <div className="black-part"></div>
            
            <div className="overlay" id="overlay" onClick={closeOverlay}>
                <img id="overlay-img" src="" alt="Large Image" />
            </div>
        </div>
    );
};

export default Footer;