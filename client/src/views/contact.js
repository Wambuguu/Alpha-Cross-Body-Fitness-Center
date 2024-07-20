import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import ContactForm5 from '../components/contact-form5'
import Contact8 from '../components/contact8'
import Footer1 from '../components/footer1'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center | Contact</title>
        <meta property="og:title" content="Contact" />
      </Helmet>
      <Navbar4></Navbar4>
      <ContactForm5 rootClassName="contact-form5-root-class-name"></ContactForm5>
      <Contact8></Contact8>
      <Footer1></Footer1>
    </div>
  )
}

export default Contact
