import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODUxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1499760824500-675daed0dafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODUxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Personalized Training Programs',
  image3Alt: 'Nutritional Guidance',
  content1:
    'Explore our fitness center through the images below showcasing our facilities and equipment.',
  heading1: 'Welcome to AlphaCross Fitness Gallery',
  image3Src:
    'https://images.unsplash.com/photo-1508088062105-17d61307629d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4ODUwOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'State-of-the-Art Equipment',
}

Gallery1.propTypes = {
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default Gallery1
