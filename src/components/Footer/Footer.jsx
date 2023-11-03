import React from 'react'
import './Footer.scss'
import '/src/global.scss'

function Footer() {
  return (
    <footer>
        <div className="wrapper">
            <div className="footer__container">
                <div className="footer__container__1">
                    <div className="footerPanel">
                        <h4>CAR <span className="span-bold">Rental</span> </h4>
                        <p>
                        We offer a big range of vehicles for all of your driving needs. We
                        have the perfect cars to meet your needs
                        </p>
                        <div>
                            <img src="/images/icons/aaaa.svg" alt="" />
                            <h5>(210)-3456-789</h5>
                        </div>
                        <div>
                            <img src="/images/icons/bbbb.svg" alt="" />
                            <h5>carrental@gmail.com</h5>
                        </div>
                    </div>

                    <div className="footerPanel">
                        <h4>COMPANY</h4>
                        <p>New York</p>
                        <p>Careers</p>
                        <p>Mobile</p>
                        <p>Blog</p>
                        <p>How we work</p>
                    </div>
                </div>
            <div className="footer__container__2">
                <div className="footerPanel">
                    <h4>WORKING HOURS</h4>
                    <p>Mon - Fri 9:00AM - 9:00PM</p>
                    <p>Sat 9:00AM - 10:00PM</p>
                    <p>Sun: Closed</p>
                </div>
        
                <div className="footerPanel">
                    <h4>SUBSCRIPTION</h4>
                    <p>Subscribe your Email address for latest news & updates</p>
                    <label for="subscribeEmailAddress"></label>
                    <div className="userEmail"><input type="text"  placeholder="Enter email address"/></div>
                    <button className="emailSubmitButton button">Submit</button>
                </div>
            </div>
      </div>






       </div>
    </footer>
  )
}

export default Footer
