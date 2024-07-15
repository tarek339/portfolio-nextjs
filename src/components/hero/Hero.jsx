import React from "react";
import heroImgMobile from "../../../public/assets/img/hero/2.jpg";
import Image from "next/image";
import Link from "next/link";

const heroContent = {
  heroImage: "/assets/img/hero/1.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "Tarek",
  heroDesignation: "Webentwickler",
  heroDescriptions: `Als Web- und Softwareentwickler mit Sitz in Hamburg, strebe ich danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen. 
  Meine Leidenschaft liegt darin, hervorragende Websites und Software zu entwickeln, 
  die das Leben der Menschen in meiner Umgebung verbessert.`,
  heroBtn: "mehr über mich",
};

const Hero = () => {
  return (
    <div className="row home-details-container align-items-center">
      <div
        className="col-lg-4 bg position-absolute d-none d-lg-block"
        style={{ backgroundImage: `url(${heroContent.heroImage})` }}></div>
      <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
        <div>
          <Image
            src={heroContent.heroMobileImage}
            className="img-fluid main-img-mobile d-sm-block d-lg-none"
            alt="hero man"
          />
          <h1 className="text-uppercase poppins-font">
            {"Hi, ich bin"} {heroContent.heroTitleName}.
            <span>{heroContent.heroDesignation}</span>
          </h1>
          <p className="open-sans-font">{heroContent.heroDescriptions}</p>
          <Link className="button" href="#about">
            <span className="button-text">{heroContent.heroBtn}</span>
            <span className="button-icon fa fa-arrow-right"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
