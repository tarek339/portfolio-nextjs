import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p85", skillPercent: "85", skillName: "CSS" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "TYPESCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "REACT.JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "NODE.JS" },
  { skillClass: "p90", skillPercent: "90", skillName: "EXPRESS.JS" },
  { skillClass: "p75", skillPercent: "75", skillName: "MONGODB" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
