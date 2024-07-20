import React from 'react'

import PropTypes from 'prop-types'

import './features17.css'

const Features17 = (props) => {
  return (
    <div className="features17-layout349 thq-section-padding">
      <div className="features17-max-width thq-section-max-width">
        <div className="features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features17-content">
          <div className="features17-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features17-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features17.defaultProps = {
  feature1Slogan: 'Tailored to Your Fitness Needs',
  feature1ImageAlt: 'Personalized Training Programs Image',
  feature1Description:
    'Our fitness center offers personalized training programs designed specifically for your fitness goals and abilities. Our expert trainers will work with you to create a customized workout plan to help you achieve the results you desire.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODUwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Personalized Training Programs',
}

Features17.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features17
