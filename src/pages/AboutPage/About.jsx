import './About.scss'
import SectionDivider from '/src/components/SectionDivider/SectionDivider'
import personIMG from '../../assets/aboutPage/img2.jpg'


function About() {
  return (
    <div className='about'>
        <div className='mission'>
            <div className='mission__section'>
                <span>Our History and Mission</span>
                <p>Founded in California in 2023, Love, CaliDrive, originally CaliDrive, began with a selection of pre-owned luxury cars. Co-founder Kenneth Arguelles envisioned a car rental service that resonated with Californians' aspirations, blending affordability with style. Now a top brand in California, Love, CaliDrive has expanded to 18 states, with a significant presence in major cities including downtown Los Angeles. Our fleet, maintained in-house, embodies our mission to offer luxury at an economical price, catering to diverse needs from daily commutes to scenic road trips. We aim to redefine Californian driving experiences with sophistication and value.</p>
                <p>Love, CaliDrive's in-house maintained fleet symbolizes our dedication to providing luxury and affordability, catering to various needs from everyday commutes to picturesque road trips. Central to our mission is not just redefining Californian driving experiences with elegance and value, but also supporting your personal journey of self-discovery. We aim to be more than a car rental service; we aspire to be a companion on your path, illuminating the way as you embrace the Californian spirit and discover your true self.</p>
                <p>Beyond just being a car rental company, Love, CaliDrive is a testament to innovation and customer-centric service. Each interaction with our clients is an opportunity to create memorable experiences, whether it's for a business trip, a family vacation, or just a weekend getaway. Our commitment extends beyond the roads. We actively engage with the community, seeking feedback and ideas, ensuring that we evolve and grow in harmony with the needs and aspirations of our customers. It’s not just about the journey, but also about the lasting relationships we build, making every drive an integral part of the larger Love, CaliDrive story..</p>
            </div>
            
        </div>
        <SectionDivider/>
        <div className='about__philosophy'>
            <div className='about__philosophy-image'>
                <img src={personIMG} alt="image of person driving"/>
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
