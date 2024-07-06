"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { handleFormData } from "../actions/form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleFormData(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
      dataPolicy: false,
    });
  };

  return (
    <>
      <form
        id="myForm"
        className="contactform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Vorname"
                required
                {...register("firstName")}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Nachname"
                required
                {...register("lastName")}
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-Mail"
                required
                {...register("email")}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Telefon"
                {...register("phone")}
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Thema"
                {...register("subject")}
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Nachricht..."
                required
                {...register("message")}
              ></textarea>
            </div>
          </div>

          <div
            className="form-group"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
              marginLeft: "10px",
              marginTop: "-10px",
            }}
          >
            <input
              style={{
                width: "17px",
                height: "17px",
                cursor: "pointer",
              }}
              type="checkbox"
              id="checkbox1"
              name="dataPolicy"
              required
              {...register("dataPolicy")}
            />
            <label htmlFor="checkbox1">
              <span style={{ cursor: "pointer" }}>
                Hiermit akzeptiere ich die Datenschutzbestimmungen der DSGVO.
              </span>
            </label>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button
              type="submit"
              className="button revealator-slideup revealator-once revealator-delay1"
            >
              <span className="button-text">Daten Senden</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
