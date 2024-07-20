import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <p className="thq-body-large">{props.text}</p>
    </div>
  )
}

Text.defaultProps = {
  text: 'Take the first step towards a healthier you with AlphaCross Fitness. Our expert trainers are ready to help you reach your fitness goals.',
}

Text.propTypes = {
  text: PropTypes.string,
}

export default Text
