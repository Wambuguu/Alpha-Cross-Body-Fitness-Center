import React from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="hero91-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text thq-heading-1">{props.heading1}</h1>
          <p className="hero91-text1 thq-body-large">{props.content1}</p>
          <div className="hero91-actions">
            <button className="thq-button-filled hero91-button">
              <span className="hero91-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero91-button1">
              <span className="hero91-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  action1: 'Explore Membership Options',
  content1:
    'Achieve your fitness goals with personalized training programs and state-of-the-art equipment.',
  image1Alt: 'Fitness center image',
  image1Src:
    'https://images.unsplash.com/photo-1585063395665-b8ad4acbb9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODE4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Subscribe now',
  heading1: 'Welcome to AlphaCross Fitness',
}

Hero91.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero91
