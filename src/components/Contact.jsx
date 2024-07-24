"use client";

import React, { useEffect } from "react";
import Address from "./Address";
import Social from "./Social";
import Form from "./Form";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div
        className="title-section text-start text-sm-center"
        data-aos="fade-up"
        data-aos-duration="1200">
        <h1>
          get in <span>touch</span>
        </h1>
        <span className="title-bg">contact</span>
      </div>
      <div className="container" data-aos="fade-up" data-aos-duration="1200">
        <div className="row">
          {/*  Left Side Starts */}
          <div className="col-12 col-lg-4">
            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
              {"Don't"} be shy !
            </h3>
            <p className="open-sans-font mb-4">
              Schreib mir einfach eine Nachricht. Ich bin immer offen für neue
              Projekte, kreative Ideen oder Möglichkeiten, an deinen Visionen
              mitzuwirken.
            </p>
            <Address />
            {/* End Address */}

            <Social />
            {/* End Social */}
          </div>
          {/* Left Side Ends */}

          {/*  Contact Form Starts  */}
          <div className="col-12 col-lg-8">
            <Form />
          </div>
          {/*  Contact Form Ends */}
        </div>
      </div>
      {/* End .container */}
    </>
  );
};

export default Contact;
