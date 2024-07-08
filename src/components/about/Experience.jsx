import React from "react";

const experienceContent = [
  {
    year: "- 2024",
    position: "Webentwickler",
    compnayName: "HAW Hamburg",
    details: `Entwicklung und Betreuung einer Webanwendung für die Auswertung von Nachrichten aus verschiedenen Quellen. 
    Der Techstack umfasst React, Redux, TypeScript, Express.js und MongoDB.`,
  },
  {
    year: "2023 - 2024",
    position: "Software Entwickler",
    compnayName: "nu:healthcare",
    details: `Unterstützung bei der Entwicklung und Betreuung einer Desktopanwendung zur Testung von 
    Covid-19-Viren mithilfe von Electron.js, React und TypeScript. 
    Die Anwendung wurde kontinuierlich weiterentwickelt, um neue Designs und Features zu integrieren.`,
  },
  {
    year: "- 2022",
    position: "Webentwickler/Verkehrsleiter",
    compnayName: "Freelance",
    details: `Entwicklung und Wartung einer Webanwendung zur Überwachung und Verwaltung von Terminen 
    sowie Gültigkeitsprüfungen von Fahrerdokumenten, HU- und SP-Fristen für Fahrzeuge. 
    Die Anwendung wurde mit React, Redux, TypeScript, Express.js und MongoDB entwickelt.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
