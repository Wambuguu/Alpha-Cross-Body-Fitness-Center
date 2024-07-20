import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar4 from '../components/navbar4'
import SignUpComponent from '../components/sign-up'
import './sign-up.css'

const SignUpPage = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center | Sign-Up </title>
        <meta property="og:title" content="Sign-Up" />
      </Helmet>
      <Navbar4 rootClassName="navbar4-root-class-name"></Navbar4>
      <SignUpComponent rootClassName="sign-up-root-class-name"></SignUpComponent>
    </div>
  )
}

export default SignUpPage
