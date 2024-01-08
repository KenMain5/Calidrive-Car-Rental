import { Link } from 'react-router-dom';
import { useState } from 'react';       
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './Navbar.scss'

const Navbar = () => {
    const [activate, setActivate] = useState(200); 

    const handleHamburger = () => {
        console.log('Hamburger clicked, current state:', activate);
        activate === 100 ? setActivate(200) : setActivate(100);
    };

    


    return ( 
        <nav className='navbar'>
            <div className="wrapper">
                <div className="navbar__items">
                    <div className="navbar__logo">
                        <div className='navbar__logo-icon'>
                            <i className="fa-solid fa-car-on navbar__logo__image"></i>
                        </div>
                            <div className="navbar__logo-text">
                                <span>CAR</span>
                                <span>Rental</span>
                            </div>
                    </div>

                    <div className="hamburgerIcon" onClick={() => handleHamburger()}>
                        <MenuOutlinedIcon/>
                    </div>

                    <div className='navbar__mobileLinks' onClick={() => handleHamburger()} style={{transform: `translateX(${activate -100}vw)`, transition:'1s ease all'}}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/careers">Careers</Link>
                     
                        <Link to="/">Our Team</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/login">Sign In</Link>
                        <Link to="/">Register</Link>
                    </div>

                    <div className="navbar__links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/careers">Careers</Link>
                       
                        <Link to="/">Our Team</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="navbar__buttons">
                            <Link to="/login">Sign In</Link>
                            <Link to="/" className='button'>Register</Link>
                    </div>

                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;

               