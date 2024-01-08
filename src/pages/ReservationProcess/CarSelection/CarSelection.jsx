import CARSELECTION from '/src/data/CARSELECTION.js'
import './CarSelection.scss'
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import BluetoothSharpIcon from '@mui/icons-material/BluetoothSharp';
import { useState } from 'react';


function CarSelection() {
  const [selectedCard, setSelectedCard] = useState();
  
  return (
    <section className='carSelection'>
            <div className='mainContainer'>
                {CARSELECTION.map((car) => (
                  <div key={car.id} className='itemCard'>
                    <div className='itemCard__image'><img src={car.image}></img></div>
                    <div className='itemCard__info'>
                        <span className='item__Card__info-size'>{car.size}</span>
                        <span className='item__Card__info-model'>{car.model}</span>
                        <span className='item__Card__info-model'>{car.features.peopleallowed}</span>
                    </div>
                    <div className='itemCard__price'>
                      <div className='itemCard__price-col'>
                          <span className='itemCard__priceLater'>{car.paylater}</span>
                          <div className='button-checkout button__checkoutStyles__gray'>pay later</div>
                      </div>
                      <div className='itemCard__price-col'>
                          <span className='itemCard__priceNow'>{car.paynow}</span>
                          <div className='button-checkout button__checkoutStyles__red'>pay now</div>
                      </div>
                    </div>
                  </div>
                ))
                }
            </div>
    </section>
  )
}

export default CarSelection
