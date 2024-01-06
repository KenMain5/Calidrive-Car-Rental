import './DateLocationForm3.scss'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import COUNTRIES from '../../../data/COUNTRIES.js';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TIMES from '../../../data/TIMES';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';

function DateLocationForm3() {
  const AGES = ["25+", "24", "23", '22', '21', '20', '19', '18'];
  const [userTime, setUserTime] = useState("noon"); 
  const [userTimeReturn, setUserTimeReturn] = useState("noon"); 
  const [location, setLocation] = useState(""); 
  const [userAge, setUserAge] = useState("25+"); 
  const [userCountry, setUserCountry] = useState("USA"); 
  const [discountCode, setDiscountCode] = useState(""); 
  const handleUserClick = (value) => {
    setUserTime(value);
  };

  const handleUserClickUsername = (value) => {
    setLocation(value);
  };

  const handleUserAge = (value) => {
    setUserAge(value);
  };

  const handleUserResidency = (value) => {
    setUserCountry(value); 
  } 

  const handleDiscountCode = (value) => {
    setDiscountCode(value)
  }




  return (
    <section className="DateLocationForm" >
      <div className="wrapper">
        <h4>Lets match you with your perfect car</h4>
        <form className="DateLocationForm__container" action="">
          {/* create another div.. for full size screen..  */}
          <div className='form__group-sameLocationButton'> 
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Pick-up and Return to same location" />
            </FormGroup>
          </div>
          <div className='form__group-fs'>
            <div className='form__group-location'>
              <input 
              placeholder='Enter your pick-up location or zip code'
              value={location}
              onChange={(e) => handleUserClickUsername(e.target.value)}
              ></input>
            </div>

            <div className='form__group-row'>
              <div className='form__group-date'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
               </LocalizationProvider>
              </div>

              <div className='form__group-time'>
                  <label></label>
                  <span>{userTime}</span>
                  <select 
                    value={userTime}
                    onChange={(e) => handleUserClick(e.target.value)}>  
                    {TIMES.map((time, index) => (
                          <option 
                          key={index} 
                          >{time}</option>
                    ))}
                  </select>
                  <div><AccessTimeOutlinedIcon/></div>
              </div>
            </div>
          </div>

         
         <div className='form__group-fs'>
            <div className='form__group-location ss-remove '>
                <input placeholder='Return to same location'></input>
            </div>
            <div className='form__group-row'>
                <div className='form__group-date'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                  </LocalizationProvider>
                  {/* Return Date */}
                </div>

                <div className='form__group-time'>
                <span>{userTimeReturn}</span>
                  <select value={userTime} onChange={(e) => setUserTimeReturn(e.target.value)}>
                  {TIMES.map((time, index) => (
                      <option key={index}>{time}</option>
                  ))}
                 
                  </select>
                  <div><AccessTimeOutlinedIcon/></div>
                </div>
              </div>
          </div>

          <div className='form__group-fs last-row'>
            <div className='form__group-age'> 
                <div className='desktop-view'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Renter's age is 25 or over" />
                  </FormGroup>
                </div>
                <div className='fullscreen-view'>
                    <div className='left-icon'>
                      <InfoOutlinedIcon/>
                      <label>Age: {}</label>
                      <span>{userAge}</span>
                    </div>
                    <select id="user-age" value={userAge} onChange={(e) => handleUserAge(e.target.value)}>
                      {AGES.map((age, index) => (
                        <option key={index}>{age}</option>
                      ))
                      }
                    </select>
                    <div className='right-icon'><KeyboardArrowDownOutlinedIcon/></div>
                </div>
            </div>

          

            <div className='residency'>
              <div className='left'>
                <InfoOutlinedIcon/>
                <label htmlFor="residency">Residency:</label>
                <span>{userCountry}</span>
              </div>
              <select id="countries" onChange={(e) => handleUserResidency(e.target.value)}>
                {COUNTRIES.map((country,index) => (
                    <option key={index} value={country.label}>{country.label}</option>
                ))}
              </select>
              <div className='right'><KeyboardArrowDownOutlinedIcon/></div>
            </div>

            <div className='discount'>
              <div className='left'>
                <div><InfoOutlinedIcon/></div>
                <label>Discount Codes: </label>
                <input value={discountCode} onChange={() => handleDiscountCode()}></input>
              </div>
            </div>
          </div>
          <div className='DateLocationForm-submitButton'><button type='submit' className='button'>SELECT MY CAR</button></div>
        

        </form>
       
      </div>
    </section>
  )
}

export default DateLocationForm3





