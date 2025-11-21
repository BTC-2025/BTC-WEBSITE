import React from "react";
import "./Loader.css";
import logo from '../assets/logo.png'

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-circle"></div>
      <img
        src={logo} // change to your logo path
        alt="Loading"
        className="loader-logo"
      />
    </div>
  );
}

export default Loader;
