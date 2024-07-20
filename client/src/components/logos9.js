import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './logos9.css'

const Logos9 = (props) => {
  return (
    <div className="logos9-container thq-section-padding">
      <div className="logos9-max-width thq-section-max-width">
        <h2 className="logos9-text thq-heading-2">{props.heading1}</h2>
      </div>
      <div className="logos9-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
        <div className="thq-animated-group-horizontal">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos9-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos9-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos9-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos9-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos9-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos9-logo6 thq-img-ratio-16-9"
          />
        </div>
        <div className="thq-animated-group-horizontal">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos9-logo11 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos9-logo21 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos9-logo31 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos9-logo41 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos9-logo51 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos9-logo61 thq-img-ratio-16-9"
          />
        </div>
      </div>
      <div>
        <div className="logos9-container5">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Logos9.defaultProps = {
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  logo6Alt: 'Expert Trainers Logo',
  heading1: 'Welcome to AlphaCross Fitness',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo5Alt: 'Membership Options Logo',
  logo4Alt: 'State-of-the-Art Equipment Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo3Alt: 'Nutritional Guidance Logo',
  logo1Alt: 'AlphaCross Fitness Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo2Alt: 'Personalized Training Logo',
}

Logos9.propTypes = {
  logo3Src: PropTypes.string,
  logo5Src: PropTypes.string,
  logo6Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  heading1: PropTypes.string,
  logo1Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo2Alt: PropTypes.string,
}

export default Logos9
