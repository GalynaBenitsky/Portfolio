import React from "react";
import { socialMediaLinks } from "../portfolio";
import "./css/contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <div className="contact">
        <h3 className="info">Keep in touch</h3>
        <div className="row">
          <div className="icons col-sm-1">
            <li>
              {socialMediaLinks.gmail ? (
                <a className="google" href={`mailto:${socialMediaLinks.gmail}`}>
                  <i className="fas fa-envelope"></i>
                </a>
              ) : null}
            </li>

            <li>
              <a className="github" href="https://github.com/GalynaM">
                <i className="devicon-github-plain colored"></i>
              </a>
            </li>

            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/galyna-matsygin-a64942a5/"
              >
                <i className="devicon-linkedin-plain colored"></i>
              </a>
            </li>

            <li>
              <a
                className="instagram-logo"
                href="https://www.instagram.com/galynabenitsky/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </div>
          <div className="col-sm-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
