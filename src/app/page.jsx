"use client";

import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import Service from "../components/service/Service";

const HomeDark = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="yellow">
      {/* End Menu Content */}
      <div className="tab-panel_list">
        {/* Hero Content Starts */}
        <div className="home" id="home">
          <div
            className="container-fluid main-container container-home p-0 g-0"
            data-aos="fade-up"
            data-aos-duration="1200">
            <div className="color-block d-none d-lg-block"></div>
            <Hero />
          </div>
        </div>
        {/* Hero Content Ends */}

        {/* About Content Starts */}
        <div className="about" id="about">
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="title-section text-start text-sm-center">
              <h1>
                ABOUT <span>ME</span>
              </h1>
              <span className="title-bg">Resume</span>
            </div>
            {/* End title */}
            <AboutMain />
          </div>
        </div>
        {/* About Content Ends */}

        {/* Service Content Starts */}
        <div className="blog" id="service">
          <div
            className="title-section text-start text-sm-center "
            data-aos="fade-up"
            data-aos-duration="1200">
            <h1>
              my <span>service</span>
            </h1>
            <span className="title-bg">service</span>
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1200">
            {/*  Articles Starts  */}
            <div className="row pb-50">
              <Service />
            </div>
            {/* Articles Ends */}
          </div>
        </div>
        {/* Service Content Ends */}

        {/* Portfolio Content Starts */}
        <div className="portfolio professional" id="portfolio">
          <div
            className="title-section text-start text-sm-center"
            data-aos="fade-up"
            data-aos-duration="1200">
            <h1>
              my <span>portfolio</span>
            </h1>
            <span className="title-bg">works</span>
          </div>
          {/* End title */}
          <Portfolio />
        </div>
        {/* Portfolio Content Ends */}

        {/* Contact Content Starts */}
        <div className="contact" id="contact">
          <div
            className="title-section text-start text-sm-center"
            data-aos="fade-up"
            data-aos-duration="1200">
            <h1>
              get in <span>touch</span>
            </h1>
            <span className="title-bg">contact</span>
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1200">
            <div className="row">
              {/*  Left Side Starts */}
              <div className="col-12 col-lg-4">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                  {"Don't"} be shy !
                </h3>
                <p className="open-sans-font mb-4">
                  Schreib mir einfach eine Nachricht. Ich bin immer offen für
                  neue Projekte, kreative Ideen oder Möglichkeiten, an deinen
                  Visionen mitzuwirken.
                </p>
                <Address />
                {/* End Address */}

                <Social />
                {/* End Social */}
              </div>
              {/* Left Side Ends */}

              {/*  Contact Form Starts  */}
              <div className="col-12 col-lg-8">
                <Contact />
              </div>
              {/*  Contact Form Ends */}
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* Contact Content Ends */}
      </div>
    </div>
  );
};

export default HomeDark;
