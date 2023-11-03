import React from 'react'
import { useState } from 'react'
import './Showcase.scss'
import { Link } from 'react-router-dom';
import car1 from '../../../assets/showCaseSection/Toyota.png'
import car2 from '../../../assets/showCaseSection/Corvette.png'
import car3 from '../../../assets/showCaseSection/Tesla.png'
import car4 from '../../../assets/showCaseSection/V12.png'
import car5 from '../../../assets/showCaseSection/CorvetteSport.png'



function Showcase() {
const [button, setButton] = useState(0); 
const handleButton = (index) => {
  setButton(index === button ? button : index)
};

// !!TODO give names to see what is active.. images alt
  
  const CARS = [
    {
      "buttonName": "GT86 Toyota" ,"url": car1, "model": "GT86", "mark": "Toyota", "year": "2023", "doors": 2, "transmission": "Automatic", "fuel": "28mpg", "cost": "$120 per day"
    }, 
    {
      "buttonName":"Corvette Stingray", "url": car2, "model": "Corvette", "color": "black", "mark": "Chevrolet" ,"year": "2024", "doors": 2, "transmission": "Automatic", "fuel": "20mpg", "cost": "$250 per day"
    }, 
    {
      "buttonName":"Model S Tesla", "url": car3, "model": "Model S","year": "2024", "doors": 4, "transmission": "Automatic", "fuel": "330mpch", "cost": "$300 per day"
    },
    {
      "buttonName":"V12 Aston Martin", "url": car4, "model": "DB11 V12","year": "2024", "doors": 4, "transmission": "Automatic", "fuel": "18mpg", "cost": "$450 per day"
    },
    {
      "buttonName":"Corvette Sport", "url": car5, "model": "Corvette","year": "2024", "doors": 2, "transmission": "Automatic", "fuel": "19mpg", "cost": "$230 per day"
    }
  ]

// showCase-section -> showcase
  return (
     <section id="showcase" className="showcase">
    
      <div className="wrapper">
        <div className='showcase__container'>
          <h4>Vehicle Models</h4>
          <h1>Our rental fleet</h1>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
          <div className='showcase__row'>
            <div id="showcase__button-container">
              {CARS.map((car, index) => (
                <div key={index} className='showcase__button'>
                <h4 onClick={() => {handleButton(index)}}>{car.buttonName}</h4>
                </div>
              ))}
            </div>
            <div className='showcase__imagesTableContainer'>
              <div className="showcase__images"> 
                <img src={CARS[button].url} alt="" />
              </div>
              <div onClick className='showcase__table'>
                <table>
                  <thead>
                    <tr>
                      <th colSpan={2}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Model</th>
                      <td>{CARS[button].model}</td>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>{CARS[button].year}</td>
                    </tr>
                    <tr>
                      <th>Doors</th>
                      <td>{CARS[button].doors}</td>
                    </tr>
                    <tr>
                      <th>Transmission</th>
                      <td>{CARS[button].transmission}</td>
                    </tr>
                    <tr>
                      <th>Fuel</th>
                      <td>{CARS[button].fuel}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='button-reserve button'><Link>RESERVE NOW</Link></div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Showcase