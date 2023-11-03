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
                        <Link to="/about/">About</Link>
                        <Link to="/VehicleModels/">Vehicle Models</Link>
                        <Link to="/Testimonials/">Testimonials</Link>
                        <Link to="/OurTeam/">Our Team</Link>
                        <Link to="/Contact/">Contact</Link>
                        <Link to="">Sign In</Link>
                        <Link to="/register">Register</Link>
                    </div>

                    <div className="navbar__links">
                        <Link to="/">Home</Link>
                        <Link to="/about/">About</Link>
                        <Link to="/VehicleModels/">Vehicle Models</Link>
                        <Link to="/Testimonials/">Testimonials</Link>
                        <Link to="/OurTeam/">Our Team</Link>
                        <Link to="/Contact/">Contact</Link>
                    </div>

                    <div className="navbar__buttons">
                            <Link to="">Sign In</Link>
                            <Link to="/register" className='button'>Register</Link>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;

               