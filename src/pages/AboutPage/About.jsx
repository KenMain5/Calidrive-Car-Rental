import React from 'react'
import './About.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SectionDivider from '/src/components/SectionDivider/SectionDivider'


function About() {
  return (
    <div className='about'>
        <div className='hero'>
            <h2>Empowering confidence through Fashion</h2>
            <div className='hero__text-icon'><KeyboardDoubleArrowDownIcon/></div>
        </div>
        <div className='mission'>
            <h2>CarRental</h2>
            <div className='mission__section'>
                <span>our history and mission</span>
                <p>In the sun-kissed landscapes of California, our story took root in 2005 when our visionary co-founders set out with a fresh perspective on car rentals. Originally going by the name CaliDrive, we embarked with a humble fleet of pre-owned luxury vehicles. Co-founder, Rachel Lim, observed a distinct disconnect in the market; she felt many car rental options didn't genuinely resonate with the dreams and desires of everyday Californians like herself. Refusing to settle for mediocrity, Rachel conceptualized a car rental service marrying affordability with flair, meticulously designed for the discerning Californian. And so, Love, CaliDrive came into existence.</p>
                <p>As we cruise into the present, Love, CaliDrive is now recognized as one of the premier car rental brands in the Golden State, with a robust online and physical footprint spanning major Californian cities. We've broadened our horizons by extending our unparalleled services to 18 states, and are thrilled to unveil our latest venture right in the vibrant heart of downtown Los Angeles!</p>
                <p>Each car in our diverse fleet is thoughtfully handpicked and maintained in-house. Central to our mission is a commitment to strike the perfect balance between luxury and economy, ensuring every Californian gets to revel in the thrill of an upscale drive without breaking the bank. Whether you're darting around for daily chores, important business rendezvous, scenic coastal drives, or unforgettable Californian road trips, we're with you for every twist and turn. Together, let's reshape the way California drives, with sophistication, grace, and value steering the way.</p>
                <p></p>
               
            </div>
            <div className='mission__section'>
                <span>Come into your own</span>
                <p>Nestled amid the rolling hills and expansive coastlines of California, our mission finds its essence. As you navigate your unique trail of self-exploration, we're committed to fueling that quest. Our ambition is to be a beacon, illuminating your path, helping you unearth your voice, trust in your essence, and celebrate your true self. As you evolve, blooming into the Californian spirit you were always destined to embody, know that we’re journeying right beside you, cheering every step you take towards embracing your authentic self.</p>
            </div>
        </div>
        <SectionDivider/>
        <div className='about__philosophy'>
            <div className='about__philosophy-image'>
                <img src="/src/assets/aboutPage/img2.jpg" alt=""/>
            </div>
            <div className='about__philosophy-text'>
                <h2>Thoughtfully-Designed Drives</h2>
                <p>Crafted for the real world, our cars don’t just shine under showroom lights; they're engineered to cater to every twist and turn of your life. From spacious interiors for those impromptu road trips to advanced safety features for days when the weather turns treacherous, we've meticulously curated every detail, so you can drive with peace of mind. Our vehicles are tested in real-world conditions, ensuring they are not just ready-to-drive, but truly ready-to-explore. Whether it's the daily commute or a weekend getaway, trust our fleet to make every journey seamless.</p>
        
            </div>
        </div>

        

    </div>
  )
}

export default About
