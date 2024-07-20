import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos9 from '../components/logos9'
import Gallery1 from '../components/gallery1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import Features171 from '../components/features171'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer1 from '../components/footer1'
import './landing1.css'

const Landing1 = (props) => {
  return (
    <div className="landing1-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center | Services</title>
        <meta
          property="og:title"
          content="Landing1 - Ornery Frozen Kookabura"
        />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero3 image1Src="https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYwfHxHeW18ZW58MHx8fHwxNzE4Nzg4NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"></Hero3>
      <Logos9></Logos9>
      <Gallery1></Gallery1>
      <Features17></Features17>
      <Features18></Features18>
      <Features171></Features171>
      <CTA1></CTA1>
      <FAQ1></FAQ1>
      <Contact4></Contact4>
      <Footer1></Footer1>
    </div>
  )
}

export default Landing1
