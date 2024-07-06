import React from "react";

const personalInfoContent = [
  { meta: "Vorname", metaInfo: "Tarek", hasColor: "" },
  { meta: "Nachname", metaInfo: "Jassine", hasColor: "" },
  { meta: "Tätigkeit", metaInfo: "Entwickler", hasColor: "green" },
  { meta: "Sitz", metaInfo: "Hamburg", hasColor: "" },
  { meta: "Telefon", metaInfo: "+49176/ 14266116", hasColor: "" },
  { meta: "E-Mail", metaInfo: "you@mail.com", hasColor: "" },
  { meta: "Fremdsprachen", metaInfo: "Englisch", hasColor: "" },
  { meta: "Hobbies", metaInfo: "Laufen", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
