import Lottie from "lottie-react";
import errorPageAnimation from '../assets/errorPageAnimation/errorPageAnimation.json'; 
import './ErrorPage.scss'


function Errorpage() {
  return (
    <section className="errorpage__container">
        <span>Oops!</span>
        <span>We can't seem to find the page you're looking for</span>
      <div className="errorpage__animation">
        <Lottie 
        animationData={errorPageAnimation} loop={true} width={50} height={50}/>
      </div>
    </section>
  )
}

export default Errorpage
