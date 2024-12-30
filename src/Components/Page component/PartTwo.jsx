import React from "react";
import "./PartTwo.css";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const PartTwo = () => {
  return (
    <>
      <section className="first_part">
        <h6>Unsere Dienstleistungen</h6>
        <p>
          Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die
          Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und
          Ent­sorgung, Lärmschutz oder Spezialgebiete – wir bieten
          Rundum-Service mit:
        </p>
      </section>

      {/* ====== card section ====== */}
      <section className="card-section ">
        {/* ===== card 1 ====== */}
        <div className="card">
          <div className="pic_div">
            <img className="pic" src="./images/picOne.png" alt="building" />
          </div>
          <div>
            <h6>Studien und Konzepte, Gesamtplanung</h6>
          </div>
          <div>
            <p className="text-[#929A9F]">
              Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und
              Eisenbahnen erfordert überzeugende Verkehrskonzepte.
            </p>
          </div>
          <Link to="#">
            <p className="flex gap-2 text-[#FF9900]">
              Erfahren Sie mehr
              <span className="pt-2">
                <MdNavigateNext />
              </span>
            </p>
          </Link>
        </div>

        {/* ===== card 2 ====== */}
        <div className="card">
          <div className="pic_div">
            <img className="pic" src="./images/picTwo.png" alt="building" />
          </div>
          <div>
            <h6>Verkehrsanlagen und Ingenieurbauwerke</h6>
          </div>
          <div>
            <p className="text-[#929A9F]">
              Verkehrskonzepte sind ein entscheidender Faktor jeglicher
              Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein
              Expertenteam aufgebaut.
            </p>
          </div>
          <Link to="#">
            <p className="flex gap-2 text-[#FF9900]">
              Erfahren Sie mehr
              <span className="pt-2">
                <MdNavigateNext />
              </span>
            </p>
          </Link>
        </div>

        {/* ===== card 3 ====== */}
        <div className="card">
          <div className="pic_div">
            <img className="pic" src="./images/picThree.png" alt="building" />
          </div>
          <div>
            <h6>Entwurfsvermessung, 3D-Laserscanning</h6>
          </div>
          <div>
            <p className="text-[#929A9F]">
              Bei Ausführung sämtlicher vermessungstechnischer Aufgaben im
              Leistungsbild „Ent­wurfs­vermessung“ sind wir ein leistungsstarker
              Partner.
            </p>
          </div>
          <Link to="#">
            <p className="flex gap-2 text-[#FF9900]">
              Erfahren Sie mehr
              <span className="pt-2">
                <MdNavigateNext />
              </span>
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PartTwo;
