import React from "react";

import { Helmet } from "react-helmet";

import Navbar4 from "../components/navbar4";
import Contact3 from "../components/contact3";
import Footer1 from "../components/footer1";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AlphaCross Body Fitness Center</title>
        <meta property="og:title" content="AlphaCross Body Fitness Center" />
      </Helmet>
      <Navbar4></Navbar4>
      <div className="home-header30 thq-section-padding">
        <img
          alt="Gym interior with equipment"
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGd5bSUyMHxlbnwwfHx8fDE3MTg3MjAzNzF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home-image"
        />
        <div className="home-container1">
          <div className="home-content">
            <h1 className="home-text thq-heading-1">
              Welcome to Alpha Cross Body Fitness Center
            </h1>
            <p className="home-text1 thq-body-large">
              <span>
                Achieve your fitness goals with our expert trainers <br></br> & state-of-the-art facilities.
              </span>
            </p>
            <div className="home-actions">
              <button className="thq-button-filled home-button">
                <span className="home-text5 thq-body-small">Our Services</span>
              </button>
              <button className="thq-button-outline home-button1">
                <span className="home-text6 thq-body-small">
                  Explore Memberships
                </span>
              </button>
            </div>
            <div className="flex flex-col items-center mt-8">
              <span className="thq-body-medium" style={{ fontWeight: "bold" }}>
                Unleash Your Inner Alpha
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-layout251 thq-section-padding">
        <div className="home-max-width thq-section-max-width">
          <div className="thq-flex-row home-section-title">
            <div className="home-container2">
              <div className="home-column thq-flex-column">
                <h2 className="thq-heading-2 home-text7">Features</h2>
              </div>
            </div>
            <span className="thq-body-small">
              Discover the key features of AlphaCross Fitness that set us apart
              from the rest.
            </span>
          </div>
          <div className="home-content1">
            <div className="home-row thq-flex-row">
              <div className="home-feature1 thq-flex-column">
                <img
                  alt="Personalized Training Programs Image"
                  src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYyMDA5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                  className="thq-img-ratio-4-3 home-feature1-image"
                />
                <div className="home-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    Personalized Training Programs
                  </h3>
                  <span className="thq-body-small">
                    Our experienced trainers create customized workout plans
                    tailored to your fitness goals and abilities.
                  </span>
                </div>
              </div>
              <div className="home-feature2 thq-flex-column">
                <img
                  alt="State-of-the-Art Equipment Image"
                  src="https://images.unsplash.com/photo-1550977616-efc580084ac5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYyMDA5Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                  className="thq-img-ratio-4-3 home-feature2-image"
                />
                <div className="home-content3 thq-flex-column">
                  <h3 className="thq-heading-3">State-of-the-Art Equipment</h3>
                  <span className="thq-body-small">
                    Train with top-of-the-line equipment designed to maximize
                    your performance and results.
                  </span>
                </div>
              </div>
              <div className="home-feature3 thq-flex-column">
                <img
                  alt="Nutritional Guidance Image"
                  src="https://images.unsplash.com/photo-1592462065256-79771d4c57b5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODYyMDA5N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                  className="thq-img-ratio-4-3 home-feature3-image"
                />
                <div className="home-content4 thq-flex-column">
                  <h3 className="thq-heading-3">Nutritional Guidance</h3>
                  <span className="thq-body-small">
                    Get expert advice on nutrition to complement your training
                    and achieve optimal health and fitness.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-actions1">
            <button className="thq-button-filled home-button2">
              <span className="thq-body-small">Explore Memberships</span>
            </button>
            <button className="thq-button-outline home-button3">
              <span className="thq-body-small">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      <Contact3></Contact3>
      <Footer1></Footer1>
    </div>
  );
};

export default Home;
