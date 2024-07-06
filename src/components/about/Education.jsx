import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "Abschlusszertifikat Webentwickler",
    institute: "Institut für Lernsysteme Hamburg",
    details: `Zertifizierter Webentwickler mit folgenden Skills:
            Web-Design, HTML5 und CSS3, Bitmaps mit Canvas, Programmierung mit JavaScript
            Responsive Webdesign, jQuery,serverseitige Technologien.`,
  },
  {
    year: "2021",
    degree: "Abschluss Webentwickler",
    institute: "Institut für Lernsysteme Hamburg",
    details: `Weiterbildung zum Webentwickler mit folgenden Lehrgangsinhalten:
            Web-Design, HTML5 und CSS3, Bitmaps mit Canvas, Programmierung mit JavaScript
            Responsive Webdesign, jQuery,serverseitige Technologien.`,
  },
  {
    year: "2019",
    degree: "Fachkunde für den gewerblichen Güterkraftverkehr",
    institute: "HK Hamburg",
    details: `Erwerb der fachlichen Eignung für den gewerblichen Güterkraftverkehr, 
    um Unternehmen führen und betreuen zu können.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
