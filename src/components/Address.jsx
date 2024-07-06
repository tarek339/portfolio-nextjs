import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Addresse</span>
        Tarek&apos;s Tech Solutions
        <br />
        Tarek Jassine
        <br />
        Classenweg 21 <br /> 22391 Hamburg <br />
        USt.-IdNr.: DE355575992
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">E-Mail</span>{" "}
        <a href="mailto:steve@mail.com">steve@mail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Telefon</span>{" "}
        <a href="Tel: +216 21 184 010">+49176/ 1426 6116</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
