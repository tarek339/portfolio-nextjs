"use client";

import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/tarek-jassine-0354a3279/",
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/tarek339",
  },
  {
    iconName: "fa fa-facebook",
  },
  {
    iconName: "fa fa-instagram",
  },
];

const Social = () => {
  return (
    <>
      <ul className="social list-unstyled pt-1 mb-5">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              <i className={val.iconName}></i>
            </a>
          </li>
        ))}
      </ul>

      {/* <div className="social list-unstyled pt-1 mb-5">
        <button onClick={toggleModalOne} className="data-policy-button">
          Datenschutz
        </button>
      </div> */}
    </>
  );
};

export default Social;
