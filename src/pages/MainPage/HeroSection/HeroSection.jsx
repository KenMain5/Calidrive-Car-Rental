import './HeroSection.scss'
import heroPic from '../../../assets/heroSection/heroPic.png'
import heroPicBg from '../../../assets/heroSection/hero-bg.png'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section id="hero" className="hero">
            <div className="wrapper">
                <div className="hero__content">
                    <div className="hero__content-text">
                        <h4>Book Your Adventure Today</h4>
                        <h1>Save <span>BIG</span> with our car rental</h1>
                        <p>
                            Rent the car of your dreams. Unbeatable prices, unlimited miles,
                            flexible pick-up options and much more
                        </p>
                        <div className="hero__content-buttons">
                            <a href="#carReservationContainer" className="button">Book Ride</a>
                            <Link to="/about" className='button blackbg'>Learn More</Link>
                        </div>
                    </div>
                    <div className="hero__content-image">
                        <img src={heroPic} alt="expensive looking car"/>
                        </div>
                    </div>
                    <div className='hero__background'>
                    <img src={heroPicBg} alt="nice background of the city" />
                    </div>
            </div>  
        </section>
  )
}

export default HeroSection