import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="bg-[#263640]">
        <div className="sec_1">
          <div>
            <img className="pt-[82px]" src="./images/Logo2.png" alt="logo" />
          </div>
          <div className="flex gap-[140px]">
            <div className="textPart">
              <h6>Geschäftsführer</h6>
              <p>Beratender Ingenieur Dipl.-Ing. Klaus Weiss</p>
            </div>
            <div className="textPart w-[145px]">
              <h6>Adresse</h6>
              <p>Straßenname 7 12345 Stadt</p>
            </div>
          </div>
        </div>
        <div className="line"> </div>
        <div className="last">
          <div>Impressum</div>
          <div className="pt-1">
            {" "}
            <img src="./images/line.png" alt="line" />
          </div>
          <div>Datenschutz</div>
        </div>
      </section>
    </>
  );
};

export default Footer;
