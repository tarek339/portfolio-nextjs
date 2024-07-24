import Hero from "../components/hero/Hero";
import AboutMain from "../components/about/AboutMain";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/service/Service";
import Contact from "../components/Contact";

const HomeDark = () => {
  return (
    <div className="yellow">
      {/* End Menu Content */}
      <div className="tab-panel_list">
        {/* Hero Content Starts */}
        <div className="home">
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
        <div className="about">
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
        <div className="blog">
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
        <div className="portfolio professional">
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
          <Contact />
        </div>
        {/* Contact Content Ends */}
      </div>
    </div>
  );
};

export default HomeDark;
