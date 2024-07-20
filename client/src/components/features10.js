import React from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-section-max-width thq-flex-column">
        <div className="features10-section-title thq-flex-column">
          <span className="thq-body-small">{props.slogan}</span>
          <h2 className="thq-heading-2 features10-text1">
            {props.sectionTitle}
          </h2>
          <p className="features10-text2 thq-body-large">
            {props.sectionDescription}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="thq-body-small">{props.feature1Description}</span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature2Title}</h3>
            <span className="thq-body-small">{props.feature2Description}</span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature3Title}</h3>
            <span className="thq-body-small">{props.feature3Description}</span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <button className="features10-button thq-button-filled">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="features10-button1 thq-button-outline">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  feature3ImageAlt: 'Nutritional Guidance Image',
  slogan: 'Elevate Your Fitness Journey with AlphaCross',
  sectionTitle: 'Features',
  secondaryAction: 'Meet Our Trainers',
  sectionDescription: 'Discover what sets AlphaCross Fitness apart',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njk0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'State-of-the-Art Equipment Image',
  heading: 'Why Choose AlphaCross Fitness?',
  feature1ImageAlt: 'Personalized Training Programs Image',
  feature2Description:
    'Access to top-of-the-line fitness equipment for an effective workout experience',
  feature1Description:
    'Tailored workout plans designed to help you reach your specific fitness goals',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1625937285759-ff46762dfa94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Personalized Training Programs',
  mainAction: 'Explore Memberships',
  feature2Title: 'State-of-the-Art Equipment',
  feature3Title: 'Nutritional Guidance',
  feature3Description:
    'Expert advice on nutrition to complement your training and enhance your overall well-being',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1499365094259-713ae26508c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njk0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features10.propTypes = {
  feature3ImageAlt: PropTypes.string,
  slogan: PropTypes.string,
  sectionTitle: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  heading: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  mainAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
}

export default Features10
