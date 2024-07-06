"use client";

import React, { useState } from "react";
import Modal from "react-modal";

// const SocialShare = [
//   {
//     iconName: "fa fa-facebook",
//     link: "https://www.facebook.com/",
//   },
//   { iconName: "fa fa-twitter", link: "https://twitter.com/" },
//   {
//     iconName: "fa fa-youtube",
//     link: "https://www.youtube.com/",
//   },
//   { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
// ];

const Social = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  return (
    // <ul className="social list-unstyled pt-1 mb-5">
    //   {SocialShare.map((val, i) => (
    //     <li key={i}>
    //       <a href={val.link} target="_blank" rel="noreferrer">
    //         <i className={val.iconName}></i>
    //       </a>
    //     </li>
    //   ))}
    // </ul>
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  Daten <span>schutz</span>
                </h1>
                <span className="title-bg">Datenschutz</span>
              </div>
              {/* End title */}
            </div>
            <div></div>
          </div>
        </div>
      </Modal>
      <div className="social list-unstyled pt-1 mb-5">
        <button onClick={toggleModalOne} className="data-policy-button">
          Datenschutz
        </button>
      </div>
    </>
  );
};

export default Social;
