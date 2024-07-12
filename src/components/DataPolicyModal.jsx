import Modal from "react-modal";
import React from "react";
import DataPolicy from "./DataPolicy";

const DataPolicyModal = ({ isOpen, toggleModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="custom-modal dark hero"
      overlayClassName="custom-overlay dark"
      closeTimeoutMS={500}
      ariaHideApp={false}>
      <div>
        {/* End close icon */}

        <div className="box_inner about">
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="title-section text-start text-sm-center">
              <h1>
                Daten <span>schutz</span>
              </h1>
              <span className="title-bg">Privacy policy</span>
            </div>
            {/* End title */}
          </div>
          <DataPolicy />
        </div>
      </div>
    </Modal>
  );
};

export default DataPolicyModal;
