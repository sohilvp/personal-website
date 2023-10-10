import React from "react";
import "./skill.css";
import skillimg from "../../asset/Group 36.png";
import { skills } from "../../projectData";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGit,
  SiPostman,
  SiNodedotjs,
  SiGithub,
  SiMongodb,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="project-contanier" id="skills">
        <h1>
          <span>#</span>Skills
        </h1>
      </div>
      <div className="skills-container">
        <div className="skills-img">
          <img src={skillimg} alt="" />
        </div>
        <div className="skill-sub-container">
          <div className="skill-list">
            {skills.map((s) => {
              return (
                <div className="single-skill" key={s.skill}>
                  <h3>{s.title}</h3>
                  <p>{s.skill}</p>
                </div>
              );
            })}
          </div>
          <div className="skill-icons">
            <SiTypescript className="icons" id="icon1" />
            <SiJavascript className="icons" id="icon2" />
            <SiExpress className="icons" id="icon3" />
            <SiHtml5 className="icons" id="icon4" />
            <SiCss3 className="icons" id="icon5" />
            <SiReact className="icons" id="icon6" />
            <TbBrandVscode className="icons" id="icon7" />
            <SiGit className="icons" id="icon8" />
            <SiPostman className="icons" id="icon9" />
            <SiNodedotjs className="icons" id="icon10" />
            <SiGithub className="icons" id="icon11" />
            <SiMongodb className="icons" id="icon12" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
