import './LoginPage.scss'
import { useState } from 'react'


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserInput = (newVal, setter) => {
    setter(newVal);
  }
  return (
    <section className='loginPage'>
        <div className='loginPage__title'>
          <h2>Car Rental</h2>
          <p>Welcome to Car Rental</p>
          <form className='loginPage__form'>
            <div className="loginPage__item">
              <label htmlFor="username or email">Username or Email</label>
              <div>
                <input value={username} onChange={(e) => handleUserInput(e.target.value, setUsername)} type="username"></input>
              </div>
            </div>

            <div className="loginPage__item">
              <label htmlFor="password">Password</label>
              <div>
                  <input  value={password} onChange={e => handleUserInput(e.target.value, setPassword)} type="password"></input>
              </div>
            </div>
            <div>
              <span>Forgot password?</span>
            </div>
          </form>
          <button className='button'>Sign in</button>
          <div className="or-divider">
            <span>Or</span>
          </div>
          <div className='loginOptions'>
            <span>Sign in with Google</span>
            <span>New Lovebirds? Create Account</span>
          </div>
        </div>
    </section>
  )
}

export default LoginPage
