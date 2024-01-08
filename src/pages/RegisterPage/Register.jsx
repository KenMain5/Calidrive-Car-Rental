
import './Register.scss'
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useState } from 'react'; 

function Register() {
  const [emailAddress, setEmailAddress] = useState(''); 
  const [emailError, setEmailError] = useState('');
  const [emailValidated, setEmailValidated] = useState(false); 
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState(''); 
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidated, setPasswordValidated] = useState(null); 
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [firstName, setFirstName] = useState(''); 
  const [firstNameError, setFirstNameError] = useState('');
  const [firstNameValidated, setFirstNameValidated] = useState(false); 
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const [lastName, setLastName] = useState(''); 
  const [lastNameError, setLastNameError] = useState('');
  const [lastNameValidated, setLastNameValidated] = useState(false); 
  const [lastNameTouched, setLastNameTouched] = useState(false);

  //Error for the date, if all validated, no error, if one error, then show error


  const [formValidated, setFormValidated] = useState(false); 

  const handleEmailChange = (email) => {
    setEmailTouched(true);
    setEmailAddress(email);
    const error = handleEmailValidation(email); 
    setEmailError(error); 
    setEmailValidated(!error); 
    handleFormValidation(); 
  };

  const handleEmailValidation = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.toLowerCase())) {
      return 'Enter a valid Email';
    } else {
      return '';
    }
  }
  


  const handlePasswordChange = (password) => {
    setPasswordTouched(true);
    setPassword(password); 
    const error = handlePasswordValidation(password); 
    setPasswordError(error)
    setPasswordValidated(!error); 
    handleFormValidation(); 
  };

  const handlePasswordValidation = (password) => {
    if (password.length < 8) {
      return('Must be 8 characters or more'); 
    } else if (password.length > 20) {
      return('Must be 20 characters or less'); 
    } else if (!/[A-Z]/.test(password)) {
      return('Must contain at least one uppercase letter');
    } else if (!/[0-9]/.test(password)) {
      return('Must contain at least one number');
    } else {
      return(''); 
    }
  }

  

  

  const handleNameChange = (newState, place) => { 
    if (place === 'first') {
      setFirstNameTouched(true);
      setFirstName(newState); 
      let error = handleNameValidation(newState); 
      setFirstNameError(error); 
      setFirstNameValidated(!error); 
    } else {
      setLastNameTouched(true);
      setLastName(newState); 
      let error = handleNameValidation(newState); 
      setLastNameError(error); 
      setLastNameValidated(!error); 
      handleFormValidation(); 
    }
  }

 
  const handleNameValidation = (name) => {
    if (name.length > 1 && name.length < 20) {
      return '';
    } else {
      return 'Enter a valid name';
    }
  };

   

  

    

    const handleFormValidation = () => {
      if (emailValidated && 
        passwordValidated && 
        firstNameValidated && 
        lastNameValidated 
        ) {
          setFormValidated(true); 
        }
    }

  //function to send the data to the server
  const sendData = (event) => {
    event.preventDefault(); 
   
    let userData = {
      emailAddress: emailAddress, 
      password: password, 
      firstName: firstName, 
      lastName: lastName, 
    }

    axios.post('/register', userData)
    .then(results => {
      console.log('success', results); 
    })
    .catch(err => {
      console.log("there was an error",err); 
    })
  } 

  return (
    <section className='register'>
      <div className='register__title'>
        <h2>Car Rental</h2>
        <p>Register</p>
      </div>
      <form className='register__form' onSubmit={sendData}>
          <div className='register__form-item'>
            <label htmlFor='emailAddress'>Email Address</label>
            <div className='register__form-box' 
              style={{ border: emailTouched && !emailValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
              <input value={emailAddress} type='email' onChange={(e) => {handleEmailChange(e.target.value)}} id='emailAddress' name='emailAddress'></input>
              <div className='register__form-error'>
                <span>{emailError}</span>
              </div>
            </div>
          </div>


          <div className='register__form-item'>
            <label htmlFor='password'>Password</label>
            <div className='register__form-box'  style={{ border: passwordTouched && !passwordValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
              <input value={password} type='password' onChange={(e) => {handlePasswordChange(e.target.value)}} id='password' name='password'></input>
              <div className='register__form-error'>
                <span>{passwordError}</span>
              </div>
            </div>
          </div>
         
            <div className='register__form-item'>
                <label htmlFor='firstName'>First Name</label>
                <div className='register__form-box' style={{ border: firstNameTouched && !firstNameValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                    <input value={firstName} type='text' onChange={(e) => {handleNameChange(e.target.value, 'first')}} id='firstName' name='firstName'></input>
              
                    <div className='register__form-error'>
                      <span>{firstNameError}</span>
                    </div>
              
                </div>
            
            </div>
            <div className='register__form-item'>
                <label htmlFor='lastName'>Last Name</label>
                <div className='register__form-box' style={{ border: lastNameTouched && !lastNameValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                    <input value={lastName} type='text' onChange={(e) => {handleNameChange(e.target.value, 'last')}} id='lastName' name='lastName'></input>
                    <div className='register__form-error'>
                    <span>{lastNameError}</span>
                      </div>
                </div>
            </div>

            <div className='register__form-item'>
                <label htmlFor='lastName'>DOB (MM-DD-YYYY)</label>
                <div className='register__form-box' style={{ border: lastNameTouched && !lastNameValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                    <input value={lastName} type='text' onChange={(e) => {handleNameChange(e.target.value, 'last')}} id='lastName' name='lastName'></input>
                    <div className='register__form-error'>
                    <span>{lastNameError}</span>
                      </div>
                </div>
            </div>
      
        <div className='form__button-container '><button disabled={formValidated ? false: true} onClick={(e) => sendData(e)} id="sendButton" className='button' type='submit'>Create Account</button></div>
      </form>
</section>
  )
}

export default Register



 
  



   