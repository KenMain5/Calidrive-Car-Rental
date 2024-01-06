import './Benefits.scss'
import { Link } from 'react-router-dom'
import carwashIcon from '../../../assets/icons/carwash.png'
import operatorIcon from '../../../assets/icons/operator.png'
import steeringwheelIcon from '../../../assets/icons/steeringwheel.png'

function Benefits() {
  return (
    <section className="benefits">
      <div className="wrapper">
        <div className="benefits__container">
          <div className="benefits__content-1"> 
            <h4>Why Choose Us</h4>
            <h1>Best valued deals you will ever find</h1>
            <p>
              Discover the best deals you'll ever find with our unbeatable offers.
              We're dedicated to providing you with the best value for your money,
              so you can enjoy top-quality services and products without breaking
              the bank. Our deals are designed to
              give you the ultimate renting experience, so dont miss out on your
              chance to save big
            </p>
            <Link to="/" className="button">Find Details</Link>
          </div>

          <div className="benefits__content-2">
            <div className="benefits__panel">
              <img src = {carwashIcon} alt="car wash icon"></img>
              <div className="benefits__panel-text">
                <h4>Cross Country Drive</h4>
                <p>
                  Take your driving to the next level with our top-notch vehicles for
                  your cross-country adventures
                </p>
              </div>
            </div>
            


            <div className="benefits__panel">
              <img src = {operatorIcon} alt="operator icon"/>
              <div className="benefits__panel-text">
                <h4>All Inclusive Pricing</h4>
                <p>
                  Get everything you need in one convenient, transparent price with our
                  all-inclusive pricing policy
                </p>
              </div>
            </div>

            <div className="benefits__panel">
              <img src= {steeringwheelIcon}  alt="steering wheel icon"/>
              <div className="benefits__panel-text">
                  <h4>No Hidden Charges</h4>
                  <p>
                  Enjoy peace of mind with our no hidden charges. We believe in
                  transparent and honest pricing
                  </p>
              </div>
            </div>

            </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits
