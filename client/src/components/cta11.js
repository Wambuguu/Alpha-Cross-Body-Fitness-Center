import React from 'react'

import PropTypes from 'prop-types'

import './cta11.css'

const CTA11 = (props) => {
  return (
    <div className="cta11-container thq-section-padding">
      <div className="cta11-max-width thq-section-max-width">
        <div className="cta11-content">
          <h2 className="cta11-heading1 thq-heading-2">{props.heading1}</h2>
          <p className="cta11-content1 thq-body-large">{props.content1}</p>
          <div className="cta11-actions"></div>
        </div>
      </div>
    </div>
  )
}

CTA11.defaultProps = {
  heading1: 'Discover AlphaCross Fitness',
  content1:
    'Achieve your fitness goals with our personalized training programs and state-of-the-art equipment.',
}

CTA11.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default CTA11
