import React from 'react'
import './Checkout.scss'
import { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import SectionDivider from '/src/components/SectionDivider/SectionDivider';
import COUNTRIES from '/src/data/countries.js';

function Checkout() {
  const [info, setInfo]= useState(); 

  return (
    <section className='checkout'>
        <div className="checkout__Container">
            <div className='userInformationContainer'>
              <form className='userInformation'>
                <span className="sectionTitle">PERSONAL INFORMATION</span>
                <SectionDivider />
                <div className='form-group'>
                  <label for="firstname">First Name*</label>
                  <div className='inputBox'>
                    <input type="text" id="firstname"></input>
                  </div>
                </div>

                <div className='form-group'>
                <label for="lastname">Last Name*</label>
                  <div className='inputBox'>
                    <input type="text" id="lastname"></input>
                  </div>
                </div>

                <div className='form-group'>
                  <label for="email">Email</label>
                  <div className='inputBox'>
                    <input type="email" id="email"></input>
                  </div>
                </div>

                <div className='form__group-sameLocationButton'>
                  <FormGroup className='group'>
                    <FormControlLabel control={<Checkbox />} label="Send me email promotion and offers" />
                  </FormGroup>
                </div>

                <div className='form-group'>
                  <label for="mobilenumber">Mobile Number</label>
                  <div className='inputBox'>
                    <input type="text" id="mobilenumber"></input>
                  </div>
                </div>

                <div className='form__group-sameLocationButton'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} 
                    label="Yes, I want to receive text messages regarding my current and upcoming rentals, which may include some promotional messages. For more information, please see our Terms and Conditions." />
                  </FormGroup>
                </div>

                <p>Your driver's license may be subject to verification from the state of issuance. </p>

                
              </form>
              
              
            </div>

            <SectionDivider />



            <section className='creditCardInformation'>
              <span className="sectionTitle">CREDIT CARD INFORMATION</span>
              <div className='form__group-sameLocationButton'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} //HAS TO BE CHECKED
                    label="Credit Card" />
                  </FormGroup>
              </div>

              <div className='form-group'>
                  <label for="email">Card Number</label>
                  <div className='inputBox'>
                  <input type="email" id="email"></input>
                  </div>
              </div>

              <div className='form-group'>
                  <label for="email">Expiration Date</label>
                  <div className='inputBox'>
                  <input type="email" id="email"></input>
                  </div>
              </div>

              <div className='form-group'>
                  <label for="email">Security Code(CVV/CVC)</label>
                  <div className='inputBox'>
                  <input type="email" id="email"></input>
                  </div>
              </div>

              <p>Credit cards are the recommended form of payment to complete your "Pay Now" reservation. Debit cards are not accepted at many Avis locations. Please note: At the time of rental, there will be a hold amount of up to $300 USD for credit and debit cards.</p>


              
              
            </section>

           

            <SectionDivider />
           

            <div className='billingInformation'>
              <span className="sectionTitle">BILLING INFORMATION</span>
              <form>

                {/* <div className='form-group'>
                  <label for="countries">Choose a country:</label>
                  <select id="countries" name="countries">
                  {COUNTRIES.map((country, index) => (
                    <option key={index} value={country.value}>{country.label}</option>
                  ))}
                  </select>
                </div> */}
                


                <div className='form-group'>
                    <label for="mobilenumber">Address Line 1</label>
                    <div className='inputBox'>
                      <input type="text" id="mobilenumber"></input>
                    </div>
                </div>

                <div className='form-group'>
                    <label for="mobilenumber">Address Line 2 optional</label>
                    <div className='inputBox'>
                      <input type="text" id="mobilenumber"></input>
                    </div>
                </div>

                <div className='form-group'>
                    <label for="mobilenumber">City</label>
                    <div className='inputBox'>
                      <input type="text" id="mobilenumber"></input>
                    </div>
                </div>

                <div className='form-group'>
                    <label for="mobilenumber">State/Province</label>
                    <div className='inputBox'>
                      <input type="text" id="mobilenumber"></input>
                    </div>
                </div>

                <div className='form-group'>
                    <label for="mobilenumber">Zip/Postal Code</label>
                    <div className='inputBox'>
                      <input type="text" id="mobilenumber"></input>
                    </div>
                </div>


              </form>
            </div> 
            <SectionDivider />



            
            



            

           
            
            <div className='termsconditions'>
              <span className="sectionTitle">TERMS & CONDITIONS </span>
              <p>IMPORTANT:  Please read the following terms for your prepaid reservation carefully. Cancellation and No-Show charges may reduce refunds for prepaid reservations. Once the vehicle is rented there are no refunds or credits for unused rental days. The below terms apply to all rentals within the United States.</p>
              <table>
                <tr>
                  <th className='equal-width'>Cancellation and Missed Reservation Policy</th>
                  <th className='equal-width'>Refund Amount</th>
                </tr>
                <tr>
                  <td>Cancelling up to 24 hours prior to scheduled pickup time</td>
                  <td>You will receive a refund of your prepaid amount, minus a $50.00 cancellation fee.</td>
                </tr>
                <tr>
                  <td>Cancelling within 24 hours prior to the scheduled pickup time.</td>
                  <td>You will receive a refund of your prepaid amount, minus a $150.00 cancellation fee. If your prepaid amount is less than $150.00 no refund will be issued.</td>
                </tr>
                <tr>
                  <td>No show, or failure to pick-up your rental vehicle</td>
                  <td>No refund will be issued.</td>
                </tr>
                <tr>
                  <td>Rental is picked up, but returned early</td>
                  <td>No refund will be issued.</td>
                </tr>




              </table>

              <div className='bigAssParagraph'>
                <ul>
                  <li>
                  At the time of rental, we require a <b>hold amount of up to $300 USD or the equivalent in your native currency</b> for credit and debit cards.
                  </li>
                  <li>
                  <b>Prepaid Debit/Gift cards</b> are <b>not acceptable</b> methods of credit identification to pick up a vehicle at any location. Avis only accepts Prepaid Debit/Gift cards at time of return.
                  </li>
                  <li>
                  Upon returning the vehicle, Avis will <b>process a release</b> of the unused portion of the hold <b>subject to your bank’s procedure. </b>This hold may take up to two weeks to be released by your bank.
                  </li>
                  <li>
                  If you have already paid towards your rental using a debit card, we will <b>reverse any hold when the rental is over.</b> The bank, however, may take time to post it back to your account. While this hold is in place, the funds will not be available for your use.
                  </li>
                </ul>
              </div>
              <SectionDivider/>
              <div className='form__group-sameLocationButton'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} //HAS TO BE CHECKED
                    label="I have read and accept the Prepay Policies and Rental Terms and Conditions , and understand that this rate is prepaid." />
                  </FormGroup>
              </div>
              <button className='button'>RESERVE</button>
           



            </div>
            
            </div>
    </section>
  )
}

export default Checkout





// <div className='travelinformation'>
// <h5>TRAVEL INFORMATION</h5>
// <p>We recommend providing your Travel information below. These details help us stay informed of any changes in your travel plans and allow our agents to better prepare for your arrival.</p>
// <label for="flightInfo">Flight Info</label>
// {Flight Info Drop Down Menu
//  Input Box, Flight Number 
// </div> 


