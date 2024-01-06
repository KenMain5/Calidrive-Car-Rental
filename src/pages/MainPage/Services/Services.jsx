import './Services.scss'
import carwashIcon from '../../../assets/icons/carwash.png'
import operatorIcon from '../../../assets/icons/operator.png'
import steeringwheelIcon from '../../../assets/icons/steeringwheel.png'

function Services() {
  return (
    <section id="services">
      <div className="wrapper">
        <div className="services__description">
          <h4>Plan your trip now</h4>
          <h1>Quick & easy car rental</h1>
          <div className="services__container">
            <div className="services-columns">
              <img src={carwashIcon} alt="car wash icon" />
             
              <h2>Select Car</h2>
              <p>
                We offer a big range of vehicles for all your driving needs. We hae
                the perfect car to meet your needs
              </p>
            </div>
            <div className="services-columns">
              <img src={operatorIcon} alt="operator icon" />
              <h2>Contact Operator</h2>
              <p>
                Our knowledgeable and friendly operators are always ready to help
                with any questions or concerns
              </p>
            </div>
            <div className="services-columns">
              <img src={steeringwheelIcon} alt="steering wheel icon" />
              <h2>Let's Drive</h2>
              <p>
                Whether you're hitting the open road, we've got you covered with our
                wide range of cars
              </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services
