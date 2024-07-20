import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq12.css'

const FAQ12 = (props) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  return (
    <div className="faq12-faq8 thq-section-padding">
      <div className="faq12-max-width thq-section-max-width thq-flex-row">
        <div className="faq12-section-title thq-flex-column">
          <div className="faq12-content thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <button className="thq-button-filled">
            <span className="thq-body-small">{props.action}</span>
          </button>
        </div>
        <div className="faq12-list thq-flex-column">
          <div className="faq12-faq1">
            <div
              onClick={() => setFaq1Visible(!faq1Visible)}
              className="faq12-trigger"
            >
              <p className="faq12-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <div className="faq12-icons-container">
                {!faq1Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq1Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon02">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq1Visible && (
              <div className="faq12-container02">
                <span className="thq-body-small">
                  Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis sunt
                  aut deleniti illum non repudiandae voluptatem. Aut praesentium
                  doloribus qui distinctio neque ut unde temporibus. Cum
                  exercitationem eveniet in omnis animi in corporis nulla. Sed
                  tempora excepturi et voluptatem modi et exercitationem
                  voluptate cum illum quisquam 33 quia blanditiis eos minus
                  consequatur.Ut neque quam qui dignissimos voluptates ut
                  voluptate totam aut consequuntur quod. Ut voluptas incidunt ut
                  fuga nostrum ut quaerat enim eum earum tenetur? Est esse harum
                  et Quis officiis et enim amet.Et minima tempore et neque
                  voluptatem eos amet officiis et temporibus Quis. Et suscipit
                  esse id nemo sunt At nihil earum et consequatur fuga aut
                  sapiente voluptate est cupiditate esse non dolor cumque. Ut
                  obcaecati recusandae et beatae quae qui doloremque eligendi
                  sit eaque labore.
                </span>
              </div>
            )}
          </div>
          <div className="faq12-faq2">
            <div
              onClick={() => setFaq2Visible(!faq2Visible)}
              className="faq12-trigger1"
            >
              <p className="faq12-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <div className="faq12-icons-container1">
                {!faq2Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon04">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq2Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon06">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq2Visible && (
              <div className="faq12-container05">
                <span className="thq-body-small">
                  Et minima tempore et neque voluptatem eos amet officiis et
                  temporibus Quis. Et suscipit esse id nemo sunt At nihil earum
                  et consequatur fuga aut sapiente voluptate est cupiditate esse
                  non dolor cumque. Ut obcaecati recusandae et beatae quae qui
                  doloremque eligendi sit eaque labore.
                </span>
              </div>
            )}
          </div>
          <div className="faq12-faq3">
            <div
              onClick={() => setFaq3Visible(!faq3Visible)}
              className="faq12-trigger2"
            >
              <p className="faq12-faq2-question1 thq-body-large">
                {props.faq3Question}
              </p>
              <div className="faq12-icons-container2">
                {!faq3Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon08">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq3Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon10">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq3Visible && (
              <div className="faq12-container08">
                <span className="thq-body-small">
                  A quia temporibus aut ullam assumenda vel eius sapiente ut
                  eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                  nulla quia qui exercitationem alias aut consequuntur nihil et
                  animi voluptas.
                </span>
              </div>
            )}
          </div>
          <div className="faq12-faq4">
            <div
              onClick={() => setFaq4Visible(!faq4Visible)}
              className="faq12-trigger3"
            >
              <p className="faq12-faq2-question2 thq-body-large">
                {props.faq4Question}
              </p>
              <div className="faq12-icons-container3">
                {!faq4Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon12">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq4Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq12-icon14">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq4Visible && (
              <div className="faq12-container11">
                <span className="thq-body-small">
                  A quia temporibus aut ullam assumenda vel eius sapiente ut
                  eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                  nulla quia qui exercitationem alias aut consequuntur nihil et
                  animi voluptas.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ12.defaultProps = {
  faq3Question:
    'Do you offer group fitness classes in addition to personalized training?',
  faq1Question: 'What are the benefits of personalized training programs?',
  faq4Question: 'Can I cancel my membership at any time?',
  faq2Question: 'How can nutritional guidance help me reach my fitness goals?',
  action: 'If you have any other questions, feel free to contact us.',
  content1:
    'Our personalized training programs are tailored to your specific goals, fitness level, and preferences to maximize results and keep you motivated.',
  heading1: 'Frequently Asked Questions',
}

FAQ12.propTypes = {
  faq3Question: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  action: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default FAQ12
