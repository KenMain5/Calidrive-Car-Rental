import './Testimonial.scss'


function Testimonial() {
  return (
    <section>
    <div className="wrapper">
      <div id="testimonialContainer">
        <h4>Reviewed by People</h4>
        <h1>Client's Testimonials</h1>
        <p id="testimonyDesc">
          Discover the positive impact we've made on the car clients by reading
          through their testimonials. Our clients have experienced our service and
          results, and they're eager to share their positive experiences with you.
        </p>
        <div id="userTestimonies">
          <div className="userTestimonyTemplate">
            <p>
              "We rented a car from this website and had an amazing experince! The
              booking was easy and the rental rates were very affordable. "
            </p>
            <div className="userTestimonyTesmplate__user">
              {/* <!-- <img src="/images/testimony/pexels-christina-morillo-1181690.jpg" alt=""/> -->
              <!-- <h4>- Patrick Star</h4> --> */}
            </div>
          </div>
          <div className="userTestimonyTemplate">
            <p>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental webbsite! "
            </p>

            <div className="userTestimonyTesmplate__user">
              {/* <!-- <img src="/images/testimony/pexels-justin-shaifer-1222271.jpg" alt=""/> --> */}
                
              
              {/* <!-- <h4>- Spongebob Squarepants</h4> --> */}
            </div>
        </div>
  </div>
  </div>
</div>
</section>
  )
}

export default Testimonial
