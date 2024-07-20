import React from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features11-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features11-content">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features11-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  mainAction: 'Personalized Training Programs',
  slogan: 'Achieve Your Fitness Goals with Us',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1610348718584-07f43528231d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODE4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Nutritional Guidance Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Membership Options Image',
  feature2Description:
    'Choose from a variety of membership plans tailored to your needs.',
  secondaryAction: 'State-of-the-Art Equipment',
  feature3Title: 'Newsletter Subscription',
  feature1Description:
    'Get expert advice on nutrition to complement your fitness journey.',
  sectionTitle: 'Features',
  feature1Title: 'Nutritional Guidance',
  feature3ImageAlt: 'Newsletter Subscription Image',
  sectionDescription:
    'Discover the key features that set AlphaCross Fitness apart from the rest.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1544033527-b192daee1f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODE4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Stay informed about our latest news and exclusive offers by subscribing to our newsletter.',
  feature2Title: 'Membership Options',
}

Features11.propTypes = {
  mainAction: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features11
