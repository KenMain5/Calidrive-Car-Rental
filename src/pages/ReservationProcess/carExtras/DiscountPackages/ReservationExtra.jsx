  import React from 'react'
import './ReservationExtra.scss'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function DiscountPackages() {
    const DISCOUNTPACKAGES = [
    {"id": 1, "title": "Protection & Safety Package", "discount": "Save $4.10", "price": "36.89/DAY", "coverage": ["Cover The Car", "Cover Roadside Issues"]}, 
    {"id": 2, "title": "Protection & Safety Package", "discount": "Save $4.10", "price": "36.89/DAY", "coverage": ["Cover The Car", "Cover Roadside Issues"]},
    {"id": 3, "title": "Ultimate Protection Package", "discount": "Save $4.10", "price": "53.39/DAY", "coverage": ["Cover The Car", "Cover Roadside Issues", "Cover My Liability"]},
]  

  return (
    <section className='reservationExtra'>
        <div className='reservationExtra_description'>
            <span>EXTRA OPTIONS, EXTRA SAVINGS</span>
            <span>Select a discounted protection package and save up to 15%</span>
            <div className='packageplans'>
              {DISCOUNTPACKAGES.map((discountpackage) => (
              <div key={discountpackage.id} className='packageContainer'>
                    <div className="package__title">
                    <span>{discountpackage.title}</span>
                    </div>
                    {/* <span>{discountpackage.price}</span> */}
                    <div className='discount__coverage'>
                    {discountpackage.coverage.map((item, index) => (
                      <div key={index} className='itemCoverage'>
                        <div className='checkIcon'><CheckOutlinedIcon/></div>
                        <span>{item}</span>
                      </div>
                    )) }
                    </div>
                    <div className='package__price'>
                      <div className='package__price-checkBox'>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1"></label>
                      </div>
                      <div>
                        <span>{`$ ${discountpackage.price}`}</span>
                      </div>
                      
                       
                    </div>
                   
              </div>
              ))
              }
            </div>
            <button className='button'>PROCEED TO CHECKOUT</button>
            {/* <button className='button'>PROCEED TO CHECKOUT</button> */}
        </div>
       
    </section>
  )
}

export default DiscountPackages


