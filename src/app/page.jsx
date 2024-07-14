"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import SwitchDark from "../components/switch/SwitchDark";
import { useEffect } from "react";
import Aos from "aos";
import Service from "../components/service/Service";
import Header from "../components/Header";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-desktop", menuName: "Service" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
];

const HomeDark = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="yellow">
        <SwitchDark />
        {/* End Switcher */}

        <Tabs>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>
          {/* End Menu Content */}
          <div className="tab-panel_list">
            {/* Hero Content Starts */}
            <TabPanel className="home">
              <div
                className="container-fluid main-container container-home p-0 g-0"
                data-aos="fade-up"
                data-aos-duration="1200">
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </div>
            </TabPanel>
            {/* Hero Content Ends */}

            {/* About Content Starts */}
            <TabPanel className="about">
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
            </TabPanel>
            {/* About Content Ends */}

            {/* Service Content Starts */}
            <TabPanel className="blog">
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
            </TabPanel>
            {/* Service Content Ends */}

            {/* Portfolio Content Starts */}
            <TabPanel className="portfolio professional">
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
            </TabPanel>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <TabPanel className="contact" id="contact">
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
                      Schreib mir einfach eine Nachricht. Ich bin immer offen
                      für neue Projekte, kreative Ideen oder Möglichkeiten, an
                      deinen Visionen mitzuwirken.
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
            </TabPanel>
            {/* Contact Content Ends */}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default HomeDark;
