import { useState } from "react"
import './Contact.scss'
import GetInTouch from "./GetInTouch";

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [inquiry, setInquiry] = useState('');

    const handleInputChange = (value, setState) => {
        setState(value);
    };

  return (
    <div className="contact__container">
        <div className="contact">
            <div className="contact__header">
                <h3>Contact Us </h3>
                <p>Send us a message with anything you want to know or ask about Curbstand Valet & Parking services, and we’ll get back to you right away.</p>
            </div>

            <form className="contact__form">
                <div className="contact__row">
                    <div className="query__item">
                        <label htmlFor="first-name"></label>
                        <input
                            id="first-name"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => handleInputChange(e.target.value, setFirstName)}
                            type="text"
                        />
                    </div>

                    <div className="query__item">
                        <label htmlFor="last-name"></label>
                        <input
                            id="last-name"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => handleInputChange(e.target.value, setLastName)}
                            type="text"
                        />
                    </div>
                </div>
                <div className="contact__row">
                    <div className="query__item">
                            <label htmlFor="phone-number"></label>
                            <input
                                id="phone-number"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => handleInputChange(e.target.value, setPhoneNumber)}
                                type="tel"
                            />
                    </div>
                    <div className="query__item">
                        <label htmlFor="email"></label>
                        <input
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => handleInputChange(e.target.value, setEmail)}
                            type="email"
                        />
                    </div>
                </div>
                <div className="contact__row">
                    <div className="query__item">
                        <label htmlFor="inquiry"></label>
                        <textarea
                            id="inquiry"
                            placeholder="Inquiry"
                            value={inquiry}
                            type="textarea"
                            onChange={(e) => handleInputChange(e.target.value, setInquiry)}
                        />
                    </div>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
        {/* <GetInTouch /> */}
    </div>
    
  )
}

export default Contact
