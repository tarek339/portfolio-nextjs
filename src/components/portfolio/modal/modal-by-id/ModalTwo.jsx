import Image from "next/image";
import React from "react";
import CloseImg from "../../../../../public/assets/img/cancel.svg";
import PortfolioData from "../../portfolioData";
import Slider from "react-slick";
import imgTitle from "../../../../../public/assets/img/portfolio/haw/1.png";
import img1 from "../../../../../public/assets/img/portfolio/haw/2.png";
import img2 from "../../../../../public/assets/img/portfolio/haw/3.png";
import img3 from "../../../../../public/assets/img/portfolio/haw/4.png";
import img4 from "../../../../../public/assets/img/portfolio/haw/5.png";
import img5 from "../../../../../public/assets/img/portfolio/haw/6.png";
import img6 from "../../../../../public/assets/img/portfolio/haw/7.png";

const ModalTwo = ({ modalId, setGetModal }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <div className="modal_portfolio">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row open-sans-font">
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Projekt:{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.project}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-user-o pr-2"></i>
                        Client :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.client}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Techstack :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.language}
                        </span>
                      </div>
                      {/* <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-signal pr-2"></i>
                        Branche :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.preview}
                        </span>
                      </div> */}
                      {/* <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-external-link pr-2"></i>
                        Preview :{" "}
                        <a
                          className="preview-link"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={details.link}>
                          {details.preview}
                        </a>
                      </div> */}
                    </div>
                  );
                })}
              </div>
              <figure style={{ maxHeight: "300px" }} className="modal__img">
                <Slider {...settings}>
                  <div>
                    <Image src={imgTitle} alt="portfolio project demo" />
                  </div>
                  <div>
                    <Image src={img1} alt="portfolio project demo" />
                  </div>
                  <div>
                    <Image src={img2} alt="portfolio project demo" />
                  </div>
                  <div>
                    <Image src={img3} alt="portfolio project demo" />
                  </div>
                  <div>
                    <Image src={img4} alt="portfolio project demo" />
                  </div>
                  <div>
                    <Image src={img5} alt="portfolio project demo" />
                  </div>
                  <div>
                    <Image src={img6} alt="portfolio project demo" />
                  </div>
                </Slider>
              </figure>

              <button
                className="close-modal"
                onClick={() => setGetModal(false)}>
                <Image src={CloseImg} alt="portfolio project demo" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalTwo;
