import './About.scss'
import SectionDivider from '/src/components/SectionDivider/SectionDivider'
import personIMG from '../../assets/aboutPage/personDriving.jpg'


function About() {
  return (
    <div className='about'>
        <div className='mission'>
            <div className='mission__section'>
                <span>Our History and Mission</span>
                <p>
Founded in California in 2023, Royal Drive (RD) emerged as a premier destination for those seeking stylish and high-quality vehicles for rent. Initially starting with a curated selection of attractive pre-owned cars, RD was conceived with the vision of combining practicality with panache. Today, Royal Drive is a recognized name in the luxury car rental market, extending its reach to 18 states and having a strong foothold in key urban areas, notably in downtown Los Angeles.</p>
                <p>RD's meticulously maintained fleet is a testament to our commitment to merging luxury with affordability. We cater to a wide array of needs, from the convenience of daily commutes to the exhilaration of scenic road trips. Our core objective is to transform driving experiences in California and beyond, infusing them with elegance and value, while also facilitating a journey of personal exploration for our clients. Royal Drive is more than just a car rental service; it's a catalyst for self-discovery, embodying the spirit of California and guiding you towards uncovering your true essence.</p>
                <p>At Royal Drive, we believe in redefining the car rental industry through innovative and customer-focused services. Every interaction with our clients is a unique opportunity to forge unforgettable experiences, be it for a business engagement, a family holiday, or a spontaneous weekend escapade. Our dedication goes beyond just providing a means of transportation. We actively participate in community dialogue, seeking input and ideas to ensure our growth aligns with the evolving desires and dreams of our clientele. Royal Drive is not just about the journey—it's about the enduring connections we establish, making each trip a vital chapter in the grand narrative of Royal Drive.</p>
            </div>
            
        </div>
        <SectionDivider/>
        <div className='about__philosophy'>
            <div className='about__philosophy-image'>
                <img src={personIMG} alt="image of person driving"/>
            </div>
            <div className='about__philosophy-text'>
                <h2>Thoughtfully-Designed Drives</h2>
                <p>
                Crafted for life's unpredictable nature, Royal Drive's vehicles are designed not just to dazzle in the showroom, but to excel in every aspect of your everyday life. Our fleet boasts cars with spacious interiors, perfect for those spontaneous road trips, and is equipped with cutting-edge safety features for those unexpected weather changes. Every detail of our vehicles has been thoughtfully selected and meticulously tested in real-life conditions, ensuring that they are not just ready for the road, but also primed for adventure.</p>
                <p>At Royal Drive, we understand that a car is more than just a mode of transportation; it's a part of your daily narrative. Whether navigating the routine of a daily commute or embarking on a leisurely weekend escape, our fleet is designed to make every trip smooth and enjoyable. Our commitment is to provide not just a vehicle, but a reliable and luxurious companion for all your journeys. Trust Royal Drive to deliver an unparalleled driving experience, every time you turn the key.</p>
            </div>
        </div>
    </div>
  )
}

export default About
