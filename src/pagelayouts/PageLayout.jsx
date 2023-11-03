import React from 'react'
import Navbar from '/src/components/Navbar/Navbar'
import Footer from '/src/components/Footer/Footer'


function PageLayout({ children }) {
  return (
    <>
         <Navbar/>
         {children}
         <Footer/>
    </>
  )
}

export default PageLayout
