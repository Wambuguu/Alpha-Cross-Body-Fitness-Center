import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Stats1 from '../components/stats1'
import Testimonial16 from '../components/testimonial16'
import Features23 from '../components/features23'
import Team3 from '../components/team3'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center | About</title>
        <meta property="og:title" content="About" />
      </Helmet>
      <Navbar4></Navbar4>
      <div className="about-header5 thq-section-padding">
        <div className="about-container01">
          <div className="about-container02">
            <div className="about-container03">
              <div className="about-container04 thq-section-padding">
                <div className="about-max-width thq-section-max-width">
                  <div className="about-content">
                    <h2 className="about-heading1 thq-heading-2">
                      Discover AlphaCross Body Fitness
                    </h2>
                    <p className="about-content1 thq-body-large">
                      Achieve your fitness goals with our personalized training
                      programs and state-of-the-art equipment.
                    </p>
                    <div className="about-actions"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-container05">
          <div className="about-max-width1 thq-section-max-width">
            <div className="about-column">
              <div className="about-container06"></div>
              <div className="about-actions1">
                <div className="about-container07">
                  <button className="about-button thq-button-filled">
                    <span className="thq-body-small">Explore Memberships</span>
                  </button>
                </div>
                <div className="about-container08">
                  <div className="about-container09">
                    <div className="about-container10">
                      <button className="thq-button-outline about-button1">
                        <span className="thq-body-small">
                          Subscribe to Newsletter
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats1 image1Src="https://images.unsplash.com/photo-1591741535018-d042766c62eb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU5fHxneW0lMjBzdGF0c3xlbnwwfHx8fDE3MTg3ODkxODV8MA&amp;ixlib=rb-4.0.3&amp;w=1400"></Stats1>
      <Testimonial16></Testimonial16>
      <Features23></Features23>
      <Team3></Team3>
      <Footer1></Footer1>
    </div>
  )
}

export default About
