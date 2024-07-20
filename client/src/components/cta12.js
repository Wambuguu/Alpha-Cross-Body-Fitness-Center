import React from 'react'

import PropTypes from 'prop-types'

import './cta12.css'

const CTA12 = (props) => {
  return (
    <div className="cta12-container thq-section-padding">
      <div className="cta12-max-width thq-section-max-width">
        <div className="cta12-container1 thq-flex-row">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <div className="cta12-content">
            <p className="thq-body-large">{props.content1}</p>
            <div className="cta12-actions">
              <button type="button" className="thq-button-filled">
                {props.action1}
              </button>
              <button type="button" className="thq-button-outline">
                {props.action2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta12-background-image thq-img-ratio-16-9"
      />
    </div>
  )
}

CTA12.defaultProps = {
  heading1: 'Ready to transform your fitness journey?',
  action2: 'Book your free consultation',
  backgroundImageAlt: 'AlphaCross Fitness CTA Section',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1522120691812-dcdfb625f397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njk0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Take the first step towards a healthier you with AlphaCross Fitness. Our expert trainers are ready to help you reach your fitness goals.',
  action1: 'Join AlphaCross Fitness today!',
}

CTA12.propTypes = {
  heading1: PropTypes.string,
  action2: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA12
