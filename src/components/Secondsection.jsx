import React from 'react'
import testimonial from '../images/images/avatar-testimonial.jpg'
import arrow from '../images/images/icon-arrow.svg'
import quote from '../images/images/icon-quotes.svg'



function Secondsection() {
    return (
        <div className="second">
            <h1>Stay productive, wherever you are</h1>
            <p className="firstp">Never let location be an issue when accessing your files. Fylo has you 
               covered for all of your file storage needs.</p>
            <p className="secondp">Securely share files and folders with friends, family and colleagues for 
               live collaboration. No email attachments required!</p>
               <span className="thirdp">See how Fylo works</span>
               <img className="arrow" src={arrow} alt="arrow" />

            <div className="testimonial">
                   <img className="quote" src={quote} alt="quote" />
                  <p>Fylo has improved our team productivity by an order of magnitude. Since 
                  making the switch our team has become a well-oiled collaboration machine.</p>

                <img src={testimonial} alt="testimonial" />
                <div className="huddle"> <span className="span1">Kyle Burton</span>
                      <p className="span2"> Founder & CEO, Huddle</p>
                </div>
            </div>

                                                              
            
        </div>
    )
}

export default Secondsection
