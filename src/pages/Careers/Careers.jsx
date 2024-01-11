import './Career.scss'
import carPhoto from '../../assets/careers/1.jpg'

function Careers() {
  return (
    <div className='career'>
        <div className='career__header'>
            <span>Drive Forward with Us</span>
            <p>Become a key player in our esteemed car rental enterprise and embark on a remarkable business voyage. Together, we'll navigate the path to triumph!</p>
        </div>
        <div className='career__row'>
          <div className='career__image'>
            <img src={carPhoto} alt="photo of handing over keys"></img>
          </div>

          <div className='career__details'>
            <p>Join our venture in the vibrant car rental sector. At our company, we pride ourselves on a diverse and modern vehicle fleet, opening doors for partners like you to manage and run a portion of our collection. This exceptional business prospect allows you to integrate into a respected and thriving brand, renowned for delivering first-rate rental services to a broad spectrum of clients. Benefit from our well-established image, extensive support network, and dynamic marketing approaches. In your role as a partner, you'll be at the helm of daily operations, customer relations, and community-based marketing efforts, while we handle the logistics of vehicle acquisition, upkeep, and overarching corporate strategies. Collaborate with us in redefining the essence of mobility and elevating customer experiences. Let's join forces and steer our journey toward collective prosperity!</p>
          </div>
        </div>
        
        
        
    </div>
  )
}

export default Careers
