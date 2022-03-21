import "./navbar.scss";
import logo from "../../images/logo.svg";
import { ReactComponent as HamburgerIcon } from "../../images/icon-hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className={`rest ${isOpen && "mobile"}`}>
        <div className="link">About</div>
        <div className="link">Services</div>
        <div className="link">Projects</div>
        <div className="contactButton">CONTACT</div>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="hamburgerContainer">
        <HamburgerIcon className="hamburgerIcon" />
      </div>
      <div className="oneMoreDiv" onClick={() => setIsOpen(false)} style={{ display: isOpen && "unset" }} />
    </div>
  );
};

export default Navbar;
