import React from "react";
import { skillsArr } from "../utils/constants";

import "./skills.css"

function Skills() {
  return (
    <div className="container">

      <div className="skills-title title" id="skills" data-aos="fade-right">
        Skills
       
      </div>
      <div className="skills-content">
        {skillsArr.map((icon, i) => {
          return (
            <div className="skills" data-aos="flip-down">
              <img
                src={icon.imgurl}
                alt="skill icon"
                key={i}
                className="skill-icon-img"
              />
              <div className="skill-icon-name">{icon.name}</div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}


 export default Skills;
