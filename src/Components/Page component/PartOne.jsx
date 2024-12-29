import React from "react";
import "./PartOne.css";
import { MdNavigateNext } from "react-icons/md";

const PartOne = () => {
  return (
    <>
      <section>
        <div className="mainsection">
          <div className="textPart pt-[100px]">
            <p className="font-bold uppercase">Ingenieur Dieter Weiss</p>
            <h3>Ingenieurbüro für Bau- und Vermessungswesen</h3>
            <p className="font-medium ">
              Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro
              Dieter Weiss ist Garant für den Er­folg Ihrer Projekte.
            </p>
            <button className="btn">
              <div>Ihr Projekt mit uns</div>
              <div className="pt-1">
                <MdNavigateNext />
              </div>
            </button>
          </div>

          <div className="imageContainer">
            <img className="img" src="./images/Image.png" alt="banner_img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartOne;
