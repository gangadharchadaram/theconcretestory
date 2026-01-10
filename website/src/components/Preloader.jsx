import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <img
          src="/logo_tcs.png"
          alt="Company Logo"
          className="preloader-logo"
        />
        <div className="hourglass"></div>
      </div>
    </div>
  );
};

export default Preloader;
