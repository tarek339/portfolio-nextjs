import React from "react";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <div className="service-title">
        <h5 className="servie-header">
          Hochwertige, innovative und sichere Software- und Weblösungen, um
          Ihren digitalen Fußabdruck zu verbessern.
        </h5>
      </div>

      <div className="row" style={{ margin: "0 auto" }} id="modal">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article className="post-container">
              {/* <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <Image src={""} className="img-fluid" alt="item.title" />
                </div>
              </div> */}
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3 style={{ textAlign: "center" }}>
                    {item?.title.toLocaleUpperCase()}
                  </h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item?.description}</p>
                </div>
              </div>
              {/* End .post-content */}
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
