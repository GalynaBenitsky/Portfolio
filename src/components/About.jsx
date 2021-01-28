import React from "react";
import "./css/about.css";
import { greeting } from "../portfolio";
import Humber from "../assets/img/humber-logo.png";
import Maup from "../assets/img/maup-logo.png";
import Udemy from "../assets/img/udemy-logo.jpg";

function About() {
  return (
    <>
      <div className="container">
        <div className="greeting">
          <h3 className="about">About me:</h3>
          <div>
            <div className="greeting-info">
              <h4>
                {" "}
                <span>
                  <strong>What do I love? </strong>
                </span>
                {greeting.info1}
              </h4>
              <h4>
                <span>
                  <strong>What am I good at?</strong>
                </span>
                {greeting.info2}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="about">Education And Certifications:</h3>
        <div className="row">
          <div className="flip">
            <div className="front">
              <img className="Humber-logo" src={Humber} alt="" />
              <h4 className="text-shadow-humber">
                Humber College Institute of Technology & Advanced Learning
              </h4>
            </div>
            <div className="back">
              <h6>Diploma in Computer Programming</h6>
              <p>2018-2020</p>
              <h6>Oracle DBA Course</h6>
              <p>2019</p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="Maup-logo" src={Maup} alt="" />
              <h4 className="text-shadow-maup">
                Interregional Academy of Personnel Management
              </h4>
            </div>
            <div className="back">
              <h6> Bachelor of Psychology</h6>
              <p>2004 - 2009</p>
            </div>
          </div>
          <div className="flip">
            <div className="front">
              <img className="Udemy-logo" src={Udemy} alt="" />
              <h4 className="text-shadow-udemy">Udemy</h4>
            </div>
            <div className="back">
              <h6>
                - The Web Developer Bootcamp
                <br />
                <p></p>
                - Python Programming Bootcamp
                <br />
                <p></p>- The Complete JavaScript Course
              </h6>

              <p>2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
