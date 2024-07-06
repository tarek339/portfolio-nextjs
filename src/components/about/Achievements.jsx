import React from "react";

const achievementsContent = [
  { title: "3", subTitle1: "Jahre", subTitle2: "Erfahrung" },
  { title: "6", subTitle1: "Projekte", subTitle2: "entwickelt" },
  { title: "15k", subTitle1: "Lines of", subTitle2: "code" },
  { title: "10", subTitle1: "happy", subTitle2: "clients" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
