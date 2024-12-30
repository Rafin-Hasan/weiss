import React from "react";
import "./PartFour.css";
import CardProperty from "../Small Component/CardProperty";
import Button from "../Small Component/Button";

const PartFour = () => {
  return (
    <>
      <section className="main_sec">
        <div className=" main_div">
          <div>
            <h2>Wissenswertes</h2>
            <p>
              Integer massa urna, senectus maecenas in dapibus urna amet
              hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam
              nunc condimentum nisl non gravida in.{" "}
            </p>
          </div>

          <div className=" btn4">
            <Button ButtonTitle={"Unser Blog"} />
          </div>
        </div>
        <div className="second_main">
          <h3>Unsere Letzten Beiträge</h3>

          <div className=" flex justify-between">
            <CardProperty
              title1="Sed eget morbi cursus elit ipsum pellentesque"
              title2={
                "Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor..."
              }
              CardButton={"Lesen Sie weiter"}
            />

            <CardProperty
              title1="Sed eget morbi cursus elit ipsum pellentesque"
              title2={
                "Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor..."
              }
              CardButton={"Lesen Sie weiter"}
            />

            <CardProperty
              title1="Sed eget morbi cursus elit ipsum pellentesque"
              title2={
                "Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor..."
              }
              CardButton={"Lesen Sie weiter"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartFour;
