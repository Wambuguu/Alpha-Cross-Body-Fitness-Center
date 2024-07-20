import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import Landing from './views/landing'
import Pricing from './views/pricing'
import Contact from './views/contact'
import Home from './views/home'
import SignIn from './views/sign-in'
import Landing1 from './views/landing1'
import SignUpView from './views/sign-up' 
import NotFound from './views/not-found'



const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Landing} exact path="/landing" />
        <Route component={Pricing} exact path="/pricing" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={Landing1} exact path="/landing1" />
        <Route component={SignUpView} exact path="/sign-up" />
        <Route component={NotFound} path="*" />
        <Redirect to="*" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
