import React from "react";

const personalInfoContent = [
  { meta: "Vorname", metaInfo: "Tarek", hasColor: "" },
  { meta: "Nachname", metaInfo: "Jassine", hasColor: "" },
  { meta: "Location", metaInfo: "Hamburg", hasColor: "" },
  { meta: "Fremdsprachen", metaInfo: "Englisch", hasColor: "" },
  { meta: "Reisebereitschaft", metaInfo: "Bundesweit", hasColor: "" },
  { meta: "Mobil", metaInfo: "Ja", hasColor: "" },
  { meta: "Frontend Entwicklung", metaInfo: "Verfügbar", hasColor: "green" },
  { meta: "Backend Entwicklung", metaInfo: "Verfügbar", hasColor: "green" },
  { meta: "Fullstack Entwicklung", metaInfo: "Verfügbar", hasColor: "green" },
  { meta: "Software Entwicklung", metaInfo: "Verfügbar", hasColor: "green" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
