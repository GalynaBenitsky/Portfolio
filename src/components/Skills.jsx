import React from "react";
import "./css/Skills.css";
import { skillsSection } from "../portfolio";

function Skills() {
  return (
    <>
      <div className="text-center">
        <div className="software-skills-main-div">
          <h1>{skillsSection.title}:</h1>
          <h3>{skillsSection.subTitle}</h3>
          <p>{skillsSection.skills}</p>

          <div clasName="skills-icon">
            <ul className="dev-icons">
              {skillsSection.softwareSkills1.map((skills) => {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p className="skills-name">{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
            <ul className="dev-icons">
              {skillsSection.softwareSkills2.map((skills) => {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p className="skills-name">{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
            <ul className="dev-icons">
              {skillsSection.softwareSkills3.map((skills) => {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <i className={skills.fontAwesomeClassname}></i>
                    <p className="skills-name">{skills.skillName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
