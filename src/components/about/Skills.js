import React from "react";
import js from "../../../public/assets/svg/js.svg";
import html from "../../../public/assets/svg/html.svg";
import css from "../../../public/assets/svg/css.svg";
import ts from "../../../public/assets/svg/ts.svg";
import react from "../../../public/assets/svg/react.svg";
import node from "../../../public/assets/svg/node.svg";
import express from "../../../public/assets/svg/express.svg";
import mongo from "../../../public/assets/svg/mongo.svg";
import git from "../../../public/assets/svg/git.svg";
import vscode from "../../../public/assets/svg/vscode.svg";
import Image from "next/image";

const skillsContent = [
  { skillClass: html, skillPercent: "90", skillName: "HTML" },
  { skillClass: css, skillPercent: "85", skillName: "CSS" },
  { skillClass: js, skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: ts, skillPercent: "85", skillName: "TYPESCRIPT" },
  { skillClass: react, skillPercent: "90", skillName: "REACT.JS" },
  { skillClass: node, skillPercent: "80", skillName: "NODE.JS" },
  { skillClass: express, skillPercent: "90", skillName: "EXPRESS.JS" },
  { skillClass: mongo, skillPercent: "75", skillName: "mongo" },
  // { skillClass: git, skillPercent: "75", skillName: "GIT" },
  // { skillClass: vscode, skillPercent: "75", skillName: "vscode" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className="text-center mt-2 mt-sm-4">
            <div>
              <Image src={val.skillClass} height={90} width={90} alt="" />
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
