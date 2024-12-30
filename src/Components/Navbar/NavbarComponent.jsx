import React, { useState } from "react";
import "./NavberComponent.css";
import { GoMail } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuBoxed } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container flex justify-between items-center py-4 relative">
      <div>
        <img src="./images/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="menu-icon md:hidden" onClick={toggleMenu}>
        {!menuOpen ? <CgMenuBoxed size={24} /> : <ImCancelCircle size={24} />}
      </div>
      <div
        className={`navlinks absolute top-[100%] left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } md:relative md:max-h-full md:opacity-100 md:shadow-none md:flex md:justify-center`} // Added md:justify-center
      >
        <Link to="#" className="block py-2 px-4 hover:bg-gray-100 md:mx-2">
          {" "}
          {/* Added md:mx-2 for spacing */}
          Startseite
        </Link>
        <Link
          to="#"
          className="block py-2 px-4 hover:bg-gray-100 flex gap-[5px] md:mx-2" // Added md:mx-2
        >
          Leistungen
          <span>
            <IoMdArrowDropdown />
          </span>
        </Link>
        <Link
          to="#"
          className="block py-2 px-4 hover:bg-gray-100 flex gap-[5px] md:mx-2" // Added md:mx-2
        >
          Referenzen
          <span>
            <IoMdArrowDropdown />
          </span>
        </Link>
        <Link to="#" className="block py-2 px-4 hover:bg-gray-100 md:mx-2">
          {" "}
          {/* Added md:mx-2 */}
          Über uns
        </Link>
      </div>
      <div>
        <div className="navbtn small-btn">
          <div>Kontakt</div>
          <div className="pt-1">
            <GoMail size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
