import Navbar from '/src/components/Navbar/Navbar'
import HeroSection from '/src/pages/MainPage/HeroSection/HeroSection'
import DateLocationForm from '/src/pages/MainPage/DateLocationForm/DateLocationForm'
import Services from '/src/pages/MainPage/Services/Services.jsx';
import Showcase from '/src/pages/MainPage/showcase/Showcase';
import SpecialOffers from '/src/pages/MainPage/SpecialOffers/SpecialOffers.jsx';
import Benefits from '/src/pages/MainPage/Benefits/Benefits.jsx';
import FAQ from '/src/pages/MainPage/FAQ/FAQ';

function Home() {
  return (
    <>
      
      <HeroSection />
      <DateLocationForm/>
      <Services/>
      <Showcase/>
      <SpecialOffers/>
      <Benefits/>
      <FAQ/>
      
    </>
  )
}

export default Home
