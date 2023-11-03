import React from 'react'
import './Services.scss'

function Services() {
  return (
    <section id="services">
      <div className="wrapper">
        <div className="services__description">
          <h4>Plan your trip now</h4>
          <h1>Quick & easy car rental</h1>
          <div className="services__container">
            <div className="services-columns">
              <img src="/src/assets/icons/carwash.png" alt="" />
             
              <h2>Select Car</h2>
              <p>
                We offer a big range of vehicles for all your driving needs. We hae
                the perfect car to meet your needs
              </p>
            </div>
            <div className="services-columns">
              <img src="/src/assets/icons/operator.png" alt="" />
              <h2>Contact Operator</h2>
              <p>
                Our knowledgeable and friendly operators are always ready to help
                with any questions or concerns
              </p>
            </div>
            <div className="services-columns">
              <img src="/src/assets/icons/steeringwheel.png" alt="" />
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
