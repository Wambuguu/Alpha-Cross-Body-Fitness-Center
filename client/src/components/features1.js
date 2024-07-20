import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-container">
            <span className="thq-body-small">{props.slogan}</span>
            <div className="features1-column thq-flex-column">
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle}
              </h2>
            </div>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3Description:
    'Get expert advice on nutrition to complement your training and achieve optimal health and fitness.',
  feature3Title: 'Nutritional Guidance',
  feature2ImageAlt: 'State-of-the-Art Equipment Image',
  sectionTitle: 'Features',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1592462065256-79771d4c57b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYyMDA5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Discover the key features of AlphaCross Fitness that set us apart from the rest.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYyMDA5N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1550977616-efc580084ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYyMDA5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Personalized Training Programs Image',
  feature1Title: 'Personalized Training Programs',
  feature2Description:
    'Train with top-of-the-line equipment designed to maximize your performance and results.',
  secondaryAction: 'Contact Us',
  feature2Title: 'State-of-the-Art Equipment',
  feature3ImageAlt: 'Nutritional Guidance Image',
  mainAction: 'Explore Memberships',
  feature1Description:
    'Our experienced trainers create customized workout plans tailored to your fitness goals and abilities.',
  slogan: 'Unleash Your Inner Alpha',
}

Features1.propTypes = {
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Description: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features1
