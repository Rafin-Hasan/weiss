import React from "react";
import "./PartFive.css";
import Button from "../Small Component/Button";

const PartFive = () => {
  return (
    <>
      <section>
        <div className="main_div2">
          <div>
            <p>Mach Karriere bei uns</p>
            <h4>Bewirb dich bei uns</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <Button ButtonTitle={"Unser Blog"} />
          </div>
          <div className="image">
            <img src="./images/lastimg.png" alt="building" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartFive;
