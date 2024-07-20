import React from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial16-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container02 thq-card">
            <div className="testimonial16-container03">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image"
              />
              <div className="testimonial16-container04">
                <strong className="thq-body-large">{props.author1Name}</strong>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
            <span className="testimonial16-text04 thq-body-small">
              {props.review1}
            </span>
          </div>
          <div className="testimonial16-container05 thq-card">
            <div className="testimonial16-container06">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container07">
                <strong className="thq-body-large">{props.author2Name}</strong>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
            <span className="testimonial16-text07 thq-body-small">
              {props.review2}
            </span>
          </div>
          <div className="testimonial16-container08 thq-card">
            <div className="testimonial16-container09">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container10">
                <strong className="thq-body-large">{props.author3Name}</strong>
                <span className="thq-body-small">{props.author3Position}</span>
              </div>
            </div>
            <span className="testimonial16-text10 thq-body-small">
              {props.review3}
            </span>
          </div>
          <div className="testimonial16-container11 thq-card">
            <div className="testimonial16-container12">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container13">
                <strong className="thq-body-large">{props.author4Name}</strong>
                <span className="thq-body-small">{props.author4Position}</span>
              </div>
            </div>
            <span className="testimonial16-text13 thq-body-small">
              {props.review4}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial16.defaultProps = {
  review2:
    'AlphaCross Fitness has truly changed my life. The personalized training programs have helped me achieve my fitness goals faster than I ever thought possible. I highly recommend it!',
  author2Alt: 'image',
  author4Position: 'Fitness Enthusiast',
  author3Alt: 'image',
  author3Src:
    'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'image',
  review4:
    "I have tried many gyms before, but AlphaCross Fitness stands out for its state-of-the-art equipment and expert trainers. It's a game-changer for anyone serious about their fitness.",
  author4Name: 'Michael Brown',
  heading1: 'Testimonials',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author1Position: 'Fitness Enthusiast',
  author1Name: 'Sarah Smith',
  author4Src:
    'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1437623889155-075d40e2e59f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Emily Johnson',
  review3:
    'The nutritional guidance provided by AlphaCross Fitness has been invaluable to me. It has not only improved my performance in the gym but also in my daily life. Thank you!',
  author2Name: 'John Doe',
  author2Position: 'Athlete',
  author2Src:
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODc4Njc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'image',
  review1:
    'I have been a member of AlphaCross Fitness for over a year now, and I have seen amazing results in my fitness journey. The trainers are knowledgeable and supportive, and the facility is top-notch.',
  author3Position: 'Health Conscious Individual',
}

Testimonial16.propTypes = {
  review2: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  review4: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author1Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  review3: PropTypes.string,
  author2Name: PropTypes.string,
  author2Position: PropTypes.string,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
}

export default Testimonial16
