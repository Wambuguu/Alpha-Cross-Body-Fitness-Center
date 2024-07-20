import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Pricing8 from '../components/pricing8'
import Logos2 from '../components/logos2'
import Features10 from '../components/features10'
import FAQ12 from '../components/faq12'
import Footer1 from '../components/footer1'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center | Pricing </title>
        <meta property="og:title" content="Pricing" />
      </Helmet>
      <Navbar4></Navbar4>
      <Pricing8></Pricing8>
      <Logos2></Logos2>
      <Features10
        feature1ImageSrc="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fEd5bSUyMHRyYWluaW5nfGVufDB8fHx8MTcxODc4ODgxNHww&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature2ImageSrc="https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxneW0lMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzE4Nzg5MDMzfDA&amp;ixlib=rb-4.0.3&amp;h=200"
        feature3ImageSrc="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwNnx8Z3ltJTIwbnV0cml0aW9ufGVufDB8fHx8MTcxODc4ODkyM3ww&amp;ixlib=rb-4.0.3&amp;h=200"
      ></Features10>
      <FAQ12></FAQ12>
      <div className="pricing-container1 thq-section-padding">
        <img
          alt="AlphaCross Fitness CTA Section"
          src="https://images.unsplash.com/photo-1522120691812-dcdfb625f397?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njk0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
          className="pricing-background-image thq-img-ratio-16-9"
        />
      </div>
      <Footer1></Footer1>
    </div>
  )
}

export default Pricing
