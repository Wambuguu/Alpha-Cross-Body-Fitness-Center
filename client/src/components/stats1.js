import React from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container1 thq-flex-column">
          <span className="thq-body-small">{props.content1}</span>
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="thq-body-large">{props.content2}</p>
          <div className="stats1-container2">
            <div className="stats1-container3">
              <h2 className="thq-heading-2">{props.stat1}</h2>
              <span className="thq-body-small">{props.stat1Description}</span>
            </div>
            <div className="stats1-container4">
              <h2 className="thq-heading-2">{props.stat2}</h2>
              <span className="thq-body-small">{props.stat2Description}</span>
            </div>
          </div>
          <div className="stats1-container5">
            <div className="stats1-container6">
              <h2 className="thq-heading-2">{props.stat3}</h2>
              <span className="thq-body-small">{props.stat3Description}</span>
            </div>
            <div className="stats1-container7">
              <h2 className="thq-heading-2">{props.stat4}</h2>
              <span className="thq-body-small">{props.stat4Description}</span>
            </div>
          </div>
        </div>
        <div className="stats1-container8">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat1Description:
    'Tailored workout plans to meet your specific fitness goals',
  stat2Description: 'Access to top-of-the-line fitness machines and tools',
  stat4Description:
    'Certified professionals dedicated to maximizing your performance and results',
  stat2: 'State-of-the-Art Equipment',
  stat3: 'Nutritional Guidance',
  image1Src:
    'https://images.unsplash.com/photo-1555243896-c709bfa0b564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  stat4: 'Expert Trainers',
  stat3Description:
    'Expert advice on healthy eating habits to complement your workouts',
  stat1: 'Personalized Training Programs',
  content1: 'Customer Feedback',
  content2:
    'Business improvements emphasized with numbers to increase creadibility',
  image1Alt: 'Fitness Center Equipment',
  heading1: 'Our Stats',
}

Stats1.propTypes = {
  stat1Description: PropTypes.string,
  stat2Description: PropTypes.string,
  stat4Description: PropTypes.string,
  stat2: PropTypes.string,
  stat3: PropTypes.string,
  image1Src: PropTypes.string,
  stat4: PropTypes.string,
  stat3Description: PropTypes.string,
  stat1: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default Stats1
