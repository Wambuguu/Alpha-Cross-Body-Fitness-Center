import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features23-text01 thq-body-small">
            {props.content1}
          </span>
          <button className="thq-button-filled features23-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features23-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features23-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features23-text07 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features23-text09 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features23-text11 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features23-text13 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature4Title: 'Expert Trainers',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1622528448260-39e8229eb10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Join AlphaCross Fitness',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1605490855119-94921710a47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Personalized Training Programs',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6Description:
    'Join a community of like-minded individuals striving for better health and fitness.',
  feature3Title: 'Nutritional Guidance',
  feature3ImageAlt: 'Nutritional Guidance Image',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1596357395217-80de13130e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'State-of-the-Art Equipment Image',
  heading1: 'Features',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1494948086448-daa14dd21bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageAlt: 'Supportive Community Image',
  feature3Description:
    'Expert advice on nutrition to complement your workouts and optimize results.',
  feature2Description:
    'Access to top-of-the-line fitness equipment to enhance your training experience.',
  feature6Title: 'Supportive Community',
  feature5Title: 'Memberships Available',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature5ImageAlt: 'Memberships Available Image',
  feature4Description:
    'Certified trainers to provide guidance, support, and motivation throughout your fitness journey.',
  feature2Title: 'State-of-the-Art Equipment',
  feature4ImageAlt: 'Expert Trainers Image',
  feature5Description:
    'Flexible membership options to suit your schedule and fitness preferences.',
  feature1Description:
    'Tailored workout plans designed to meet your specific fitness goals and needs.',
  feature1ImageAlt: 'Personalized Training Programs Image',
}

Features23.propTypes = {
  feature4Title: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  action1: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature6Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature6Title: PropTypes.string,
  feature5Title: PropTypes.string,
  content1: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature5Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features23
