import React from "react";
import "./Header.css";
import logo from "./karmayogi-bharat-logo.png"; // Ensure you have this logo in your project

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Karmayogi Bharat Logo" />
      </div>
      <nav className="nav">
        <a href="#about">About Us</a>
        <a href="#mission">Mission Karmayogi</a>
        <a href="#newsroom">Newsroom</a>
        <a href="#career">Career</a>
        <a href="#tenders">Tenders</a>
        <a href="#contact">Contact Us</a>
      </nav>
      {/* <div className="language-switcher">
        <button>English</button>
      </div> */}
    </header>
  );
};

export default Header;