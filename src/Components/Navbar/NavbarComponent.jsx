import React from "react";
import "./NavberComponent.css";
import { GoMail } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav className="container flex justify-between pt-16">
        <div>
          <img src="./images/logo.png" alt="Logo" />
        </div>
        <div className="navlinks">
          <Link to="#">Startseite</Link>
          <Link to="#" className="flex gap-[5px]">
            Leistungen
            <span className="pt-[4px]">
              <IoMdArrowDropdown />
            </span>
          </Link>
          <Link to="#" className="flex gap-[5px]">
            Referenzen
            <span className="pt-[4px]">
              <IoMdArrowDropdown />
            </span>
          </Link>
          <Link to="#">Über uns</Link>
        </div>
        <div>
          <div className="navbtn">
            <div>Kontakt</div>
            <div className="pt-1">
              <GoMail />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
