import React from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div
      className={`hero2-header5 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero2-container"></div>
      <div className="hero2-container1">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="thq-heading-1 hero2-text">{props.heading1}</h1>
              <p className="thq-body-large hero2-text1">{props.content1}</p>
              <div className="hero2-actions">
                <div className="hero2-container2">
                  <button className="hero2-button thq-button-filled">
                    <span className="thq-body-small">{props.action1}</span>
                  </button>
                </div>
                <div className="hero2-container3">
                  <button className="thq-button-outline hero2-button1">
                    <span className="thq-body-small">{props.action2}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  rootClassName: '',
  heading1: 'Welcome to AlphaCross Fitness',
  action1: 'Explore Memberships',
  image1Src:
    'https://images.unsplash.com/photo-1454991417399-8ef05668aee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Fitness center interior with equipment',
  content1:
    'Achieve your fitness goals with our personalized training programs and state-of-the-art equipment.',
  action2: 'Subscribe to Newsletter',
}

Hero2.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
}

export default Hero2
