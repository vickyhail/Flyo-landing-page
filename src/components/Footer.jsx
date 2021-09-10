import React from 'react'
import footerlogo from '../images/images/logo.svg'
import phone from '../images/images/icon-phone.svg'
import email from '../images/images/icon-email.svg'

function Footer() {
    return (
        <div>
            <img src={footerlogo} alt="logo" className="logoimg" />
            <img src={phone} alt="phone" className="phoneimg" />
           <span className="phone">Phone: +1-543-123-4567</span> 
           <img src={email} alt="email"className="emailimg" />
           <span className="email">example@fylo.com</span>
                
        </div>
    )
}

export default Footer
