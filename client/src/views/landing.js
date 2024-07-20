import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero91 from '../components/hero91'
import Features11 from '../components/features11'
import Contact31 from '../components/contact31'
import Footer1 from '../components/footer1'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Landing - Ornery Frozen Kookabura</title>
        <meta property="og:title" content="Landing - Ornery Frozen Kookabura" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero91 image1Src="https://images.unsplash.com/photo-1540558870477-e8c59bf88421?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4MHx8Z3ltfGVufDB8fHx8MTcxODc5NTA5OHww&amp;ixlib=rb-4.0.3&amp;w=1500"></Hero91>
      <Features11></Features11>
      <Contact31></Contact31>
      <Footer1></Footer1>
    </div>
  )
}

export default Landing
