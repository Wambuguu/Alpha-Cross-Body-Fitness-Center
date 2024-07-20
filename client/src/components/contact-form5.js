import React from 'react'

import PropTypes from 'prop-types'

import './contact-form5.css'

const ContactForm5 = (props) => {
  return (
    <div
      className={`contact-form5-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-column">
        <div className="contact-form5-section-title thq-flex-column">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-form5-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-small contact-form5-text02">
              {props.content1}
            </span>
          </div>
        </div>
        <form className="contact-form5-form thq-flex-column">
          <div className="contact-form5-container">
            <div className="contact-form5-input">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form5-input1">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form5-container1">
            <div className="contact-form5-input2">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-5-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form5-input3">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form5-container2">
            <div className="contact-form5-input4">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-5-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1" className="">
                  Customer service
                </option>
                <option value="Option 2" className="">
                  Finance
                </option>
                <option value="Option 3" className="">
                  Feature request
                </option>
              </select>
            </div>
          </div>
          <div className="contact-form5-container3">
            <label htmlFor="contact-form-5-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-5-message"
              rows="3"
              placeholder="Enter your message"
              className="thq-input contact-form5-textarea"
            ></textarea>
          </div>
          <div className="contact-form5-checkbox">
            <input
              type="checkbox"
              id="contact-form-5-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-5-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form5-button thq-button-filled"
          >
            <span className="thq-body-small">{props.action}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm5.defaultProps = {
  content2: 'Get in touch with us today!',
  rootClassName: '',
  action: 'Submit',
  heading1: 'Contact us',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
}

ContactForm5.propTypes = {
  content2: PropTypes.string,
  rootClassName: PropTypes.string,
  action: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default ContactForm5
