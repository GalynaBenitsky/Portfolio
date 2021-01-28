import React from "react";
import "./css/main.css";
import Image from "../assets/img/profile.png";

import { greeting } from "../portfolio";

function Main() {
  return (
    <>
      <div className="container">
        <div className="picture">
          <img className="profile-pic" src={Image} alt="Profile" />
        </div>
        <div className="main">
          <h1>{greeting.title}</h1>
          <h3>{greeting.subTitle}</h3>
          <p className="lead">
            <a className="btn btn-lg" href={greeting.resumeLink} role="button">
              Download Resume
            </a>
          </p>
        </div>

        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
}
export default Main;
