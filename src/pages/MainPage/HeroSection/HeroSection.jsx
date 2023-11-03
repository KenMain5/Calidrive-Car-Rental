import React from 'react'
import './HeroSection.scss'


function HeroSection() {
  return (
    <section id="hero" className="hero">
            <div className="wrapper">
                <div className="hero__content">
                    <div className="hero__content-text">
                        {/* <h4>Plan your trip now</h4> */}
                        <h4>Book Your Adventure Today</h4>
                        {/* <h1>Unlock <span>BIG</span> savings on your next rental</h1> */}
                        <h1>Save <span>BIG</span> with our car rental</h1>
                        <p>
                        Rent the car of your dreams. Unbeatable prices, unlimited miles,
                        flexible pick-up options and much more
                        </p>
                        <div className="hero__content-buttons">
                            <a href="#carReservationContainer" className="button">Book Ride</a>
                            <a href="" className="button blackbg">Learn More</a>
                        </div>
                    </div>
                    <div className="hero__content-image">
                        <img src="/src/assets/heroSection/heroPic.png" alt=""/>
                        </div>
                    </div>
                    <div className='hero__background'>
                    <img src="/src/assets/heroSection/hero-bg.png" alt="" />
                    </div>
            </div>  
        </section>
  )
}

export default HeroSection