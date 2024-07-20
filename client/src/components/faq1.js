import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  action1: 'Contact',
  faq2Question: 'Is nutritional guidance included in the memberships?',
  faq1Question:
    'What types of training programs are offered at AlphaCross Fitness?',
  faq2Answer:
    'Yes, nutritional guidance is included in the memberships to help members achieve overall wellness.',
  faq1Answer:
    'AlphaCross Fitness offers personalized training programs tailored to individual fitness goals and needs.',
  heading1: 'FAQs',
  faq5Question:
    'How can I stay updated with the latest news and offers from AlphaCross Fitness?',
  faq3Question: 'What kind of equipment is available at AlphaCross Fitness?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq4Question: 'Are expert trainers available to assist members?',
  heading2: 'Still have a question?',
  faq3Answer:
    'AlphaCross Fitness provides state-of-the-art equipment to ensure effective and varied workout routines.',
  faq5Answer:
    'You can subscribe to our newsletter to receive regular updates on news, events, and special offers at AlphaCross Fitness.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq4Answer:
    'Yes, expert trainers are available to provide guidance, support, and motivation to help members reach their fitness goals.',
}

FAQ1.propTypes = {
  action1: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq1Answer: PropTypes.string,
  heading1: PropTypes.string,
  faq5Question: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  faq4Question: PropTypes.string,
  heading2: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq5Answer: PropTypes.string,
  content2: PropTypes.string,
  faq4Answer: PropTypes.string,
}

export default FAQ1
