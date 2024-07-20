import React from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content thq-flex-row">
          <div className="contact7-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact7-content2 thq-flex-row">
          <div className="contact7-container1">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image thq-img-ratio-16-9"
            />
            <h3 className="contact7-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact7-container2">
              <span className="thq-button-flat thq-body-small">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact7-container3">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text5 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact7-container4">
              <span className="thq-button-flat thq-body-small">
                Get directions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location2: 'Cluj - Napoca',
  location2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  heading1: 'Locations',
  location2ImgAlt: 'image2Alt',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1572985025058-f27aeca1b8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQ5Mzg3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location1ImgAlt: 'image1Alt',
  location1ImgSrc:
    'https://images.unsplash.com/photo-1624862304762-3dc2366f6141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQ5Mzg3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: 'Bucharest',
}

Contact7.propTypes = {
  content1: PropTypes.string,
  location2: PropTypes.string,
  location2Description: PropTypes.string,
  heading1: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location2ImgSrc: PropTypes.string,
  location1Description: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location1ImgSrc: PropTypes.string,
  location1: PropTypes.string,
}

export default Contact7
