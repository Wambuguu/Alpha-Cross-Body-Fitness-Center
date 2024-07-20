import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-section-max-width thq-flex-row">
          <div className="hero3-column">
            <h1 className="thq-heading-1 hero3-text">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="thq-body-large hero3-text1">{props.content1}</p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero3-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  heading1: 'Welcome to AlphaCross Fitness',
  image1Alt: 'AlphaCross Fitness Center',
  image1Src:
    'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODUwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Achieve Your Fitness Goals with Personalized Training Programs and Nutritional Guidance',
  action1: 'Contact for a Free Trial',
  action2: 'Explore Membership Options',
}

Hero3.propTypes = {
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero3
