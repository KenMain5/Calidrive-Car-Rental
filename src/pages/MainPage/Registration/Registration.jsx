import './Registration.scss'

function Registration() {
  return (
    <div>
    {/* loginPage ->  */}
      <section className='registrationPage'>
        <div className='registrationPage__image'>
            <img src="/public/re2.jpg" alt="" />
        </div>
        <div className='registrationPage__title'>
            <h2>Car Rental</h2>
            <p>Welcome to Car Rental</p>
            <form className='registrationPage__form'>
                 <div className="registrationPage__item">
                    <label for="username or email">Username or Email</label>
                    <div>
                      <input type="username"></input>
                    </div>
                 </div>

                 <div className="registrationPage__item">
                  <label for="password">Password</label>
                    <div>
                        <input type="password"></input>
                      </div>
                  </div>
                 <div><span>Forgot password?</span></div>
            </form>
         
            
            <button className='button'>Sign in</button>
            
            <div className="or-divider">
              <span>Or</span>
            </div>

            {/* Google Image */}
            <div className='registrationOptions'>
              <span>Sign in with Google</span>
              <span>New Lovebirds? Create Account</span>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Registration
