import './Career.scss'
import carPhoto from '../../assets/careers/1.jpg'

function Careers() {
  return (
    <div className='career'>
        <div className='career__header'>
            <span>Rent A Future With Us</span>
            <p>Join our team for exceptional car rental services and a unique business experience. Let's drive success together!</p>
        </div>
        <div className='career__row'>
          <div className='career__image'>
            <img src={carPhoto} alt="photo of handing over keys"></img>
          </div>

          <div className='career__details'>
            <p>Embark on a journey with us in the dynamic car rental industry. Our company owns a diverse fleet of vehicles, offering partners the opportunity to manage and operate a segment of our fleet. This unique business opportunity allows you to become part of a well-established brand, providing top-quality rental services to a wide range of customers. Benefit from our strong reputation, comprehensive support, and effective marketing strategies. As a partner, you'll oversee the day-to-day operations, customer service, and local marketing initiatives, while we take care of vehicle procurement, maintenance, and broad business strategies. Join us in shaping the future of mobility and enhancing customer satisfaction. Together, let's drive towards a successful future!</p>
          </div>
        </div>
        
        
        
    </div>
  )
}

export default Careers
