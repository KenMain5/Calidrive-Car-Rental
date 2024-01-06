import './FAQ.scss'
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); 
  const handleClick = (indexClicked) => {
    setOpenIndex(openIndex === indexClicked ? -1: indexClicked)
  };

  const faqs = [
    {
      question: "What is special about comparing rental car deals?", 
      answer: "Comparing rental car deals is important as it helps find the best deal that fits our budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
    }, 
    {
      question: "How do i find the car rental deals?", 
      answer: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to the informed of any special deals or promotions"
    },
    {
      question: "How do i find such low rental car prices", 
      answer: "Book in advance. Booking your car rental ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
    }
  ]

  return (
    <section id="FAQ" className="FAQ">
      <div className="wrapper">
        <div className="FAQ__header">
          <h4>FAQ</h4>
          <h1>Frequently Asked Questions</h1>
          <p className="FAQ__Description">
            Frequently Asked Questions about the Car Rental Booking Process on Our
            Website. Answers to Common Concerns and Inquiries
          </p>
        </div>

        <div className='accordion'>
          
            {faqs.map((faq, index) => (
              <div className="accordion__item" key={index}>
                <header 
                className={`accordion__item-header ${openIndex === index ? "open-tab-header": ""}`}
                onClick={() => (handleClick(index))}
                >
                  <h3 className="accordion__item-title">{faq.question}</h3>
                  <i className='bx bx-chevron-down accordion__icon'></i>
                </header>

                <div className={`accordion__item-description ${openIndex === index ? "open-tab": ""}`}>
                  <p className="accordion__item-information">{faq.answer}</p>
                </div>
              </div>


            ))}
           
            
          


          </div>
        </div>
      </section>
  )
}

export default FAQ 
