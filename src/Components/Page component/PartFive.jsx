import React from "react";
import "./PartFive.css";
import Button from "../Small Component/Button";

const PartFive = () => {
  return (
    <>
      <section className="bg-[#F5F8FA]">
        <div className="main_div2">
          <div>
            <p className="first_p">Mach Karriere bei uns</p>
            <h4 className="head">Bewirb dich bei uns</h4>
            <p className="second_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <Button ButtonTitle={"Karriere"} />
          </div>
          <div className="image">
            <img className="pic" src="./images/lastimg.png" alt="building" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartFive;
