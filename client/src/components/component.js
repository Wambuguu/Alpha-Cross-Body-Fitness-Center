import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <iframe
        src={props.location2GoogleMap}
        title="Map"
        className="app-component-iframe"
      ></iframe>
    </div>
  )
}

AppComponent.defaultProps = {
  location2GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d87449.5721581957!2d23.6084223!3d46.7688557!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1713508390460!5m2!1sen!2sro',
}

AppComponent.propTypes = {
  location2GoogleMap: PropTypes.string,
}

export default AppComponent
