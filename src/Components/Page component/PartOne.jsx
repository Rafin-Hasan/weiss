import React from "react";
import "./PartOne.css";
import { MdNavigateNext } from "react-icons/md";
import Button from "../Small Component/Button";

const PartOne = () => {
  return (
    <>
      <section>
        <div className="mainsection">
          <div className="textPart pt-[100px]">
            <p className="font-bold uppercase">Ingenieur Dieter Weiss</p>
            <h3>Ingenieurbüro für Bau- und Vermessungswesen</h3>
            <p className="font-medium mb-[38px]">
              Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro
              Dieter Weiss ist Garant für den Er­folg Ihrer Projekte.
            </p>
            <Button ButtonTitle={"Ihr Projekt mit uns"} />
          </div>

          <div className="imageContainer">
            <img className="pic" src="./images/Image.png" alt="banner_img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartOne;
