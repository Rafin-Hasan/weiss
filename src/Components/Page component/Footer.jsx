import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="bg-[#263640]">
        <div className="sec_1">
          <div>
            <img
              className=" lg:pt-[82px] pt-[60px] md:pt-[60px] sm:pt-[40px] max-w-[200px] sm:max-w-[150px]"
              src="./images/Logo2.png"
              alt="logo"
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-[80px] lg:gap-[140px]">
            <div className="textPart">
              <h6>Geschäftsführer</h6>
              <p>Beratender Ingenieur Dipl.-Ing. Klaus Weiss</p>
            </div>
            <div className="textPart w-full md:w-[145px]">
              <h6>Adresse</h6>
              <p>Straßenname 7 12345 Stadt</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="last flex-col sm:flex-row gap-4 sm:gap-2">
          <div>Impressum</div>
          <div className="pt-1">
            <img
              src="./images/line.png"
              alt="line"
              className="hidden sm:block"
            />
          </div>
          <div>Datenschutz</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
