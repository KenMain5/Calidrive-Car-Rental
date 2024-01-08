import './GetInTouch.scss'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
function GetInTouch() {
  const contactInfo = [
    {
    title: 'Reach Out to Us',
    data: '555-555-5555',
    Icon: WifiCalling3Icon
    }, 
    {
    title: 'We\'re Open',
    data: 'Monday - Friday',
    Icon: AccessTimeIcon
    },
    {
    },
    {
    title: 'Visit Us',
    data: '1500 Market Street, Philadelphia, PA 19102',
    Icon: PlaceIcon 
    }
  ]

  return (
    <div className='getInTouch'>
        <span>Reach Out to Us</span>
        <div className='getInTouch__infoSection'>
          {contactInfo.map((item, index) => (
              <div key={index}>
                  <div className='getInTouch__description'>
                    <h3>{item.title}</h3>
                    <p>{item.data}</p>
                  </div>

                
              </div>
          ))}
        </div>
        
    </div>
  );
}
export default GetInTouch
