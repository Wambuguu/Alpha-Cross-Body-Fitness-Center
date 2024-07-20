import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import SignIn82 from '../components/sign-in82'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center | Sign-In</title>
        <meta property="og:title" content="Sign-In" />
      </Helmet>
      <Navbar4></Navbar4>
      <SignIn82></SignIn82>
    </div>
  )
}

export default SignIn
