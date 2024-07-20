import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import './contact8.css'

const Contact8 = (props) => {
  return (
    <div className="contact8-container thq-section-padding">
      <div className="contact8-max-width thq-section-max-width">
        <div className="contact8-content thq-flex-row">
          <div className="contact8-content1">
            <h2 className="thq-heading-2 contact8-text">{props.heading1}</h2>
            <p className="thq-body-large contact8-text1">{props.content1}</p>
          </div>
        </div>
        <div className="contact8-content2 thq-flex-row">
          <div className="contact8-container1">
            <div className="contact8-container2">
              <div className="contact8-container3">
                <h3 className="contact8-text2 thq-heading-3">
                  {props.location1}
                </h3>
                <p className="contact8-text3 thq-body-large">
                  {props.location1Details}
                </p>
                <div className="contact8-container4">
                  <a
                    href="https://www.google.com/maps/place/Alpha+Cross+Body+Fitness+Center/@-0.4216167,36.9476756,17z/data=!3m1!4b1!4m6!3m5!1s0x18286705fc026c57:0x23e78e118f2abe45!8m2!3d-0.4216221!4d36.9502559!16s%2Fg%2F11rd73_3lh?hl=en&amp;entry=ttu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="thq-button-flat thq-body-small"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>
            <AppComponent></AppComponent>
          </div>
          <div className="contact8-container5">
            <div className="contact8-container6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact8.defaultProps = {
  location1Details: 'Shah Plaza (3rd Floor) Next to National Bank, Nyeri Kenya',
  location2: 'Support Center',
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
  location2Details: '456 Support Street, Townsville, State, Zip Code',
  heading1: 'Contact Us',
  location1: 'AlphaCross Fitness Center',
  content1:
    'For inquiries, membership details, or any assistance, please feel free to contact us at the locations provided.',
}

Contact8.propTypes = {
  location1Details: PropTypes.string,
  location2: PropTypes.string,
  location1GoogleMap: PropTypes.string,
  location2Details: PropTypes.string,
  heading1: PropTypes.string,
  location1: PropTypes.string,
  content1: PropTypes.string,
}

export default Contact8
