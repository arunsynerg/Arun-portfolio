import React from "react";
import"./education.css"
import educationSvg from "../../assets/education.svg";
import udemyimg from "../../assets/udemy.png";
import univerisityimg from "../../assets/download.jpg";
import relevel from "../../assets/relevel-logo.png";
function Education() {
  return (
    <div className="container educontainer">
      <div
        className="education-title title"
        id="education"
        data-aos="fade-left"
      >
        Education
      </div>

      <div className="education-content">
        <div className="edu-svg-wrapper">
          <img
            src={educationSvg}
            alt="girl reading
            "
            className="edu-svg"
          />
        </div>
        <div className="edu-details-wrapper">
          <div
            className="degree-details-wrapper"
            data-aos="fade-up"
          >
            <h4 className="edu-title">Degree</h4>
            <p className="edu-institute">
              <span>
                <img
                  src={univerisityimg}
                  alt="universityLogo"
                  className="edu-logo"
                />
              </span>
              Bishop Heber College
            </p>
            <p className="edu-course">BCA</p>
            <p className="edu-duration">july 2017 - june 2020</p>
            <p className="edu-cgpa">CGPA : 8.5</p>
          </div>

          <div
            className="certification-details-wrapper "
            data-aos="fade-up"
          >
            <h4 className="edu-title">Certification</h4>
            <p className="edu-institute">
              <span>
                <img src={relevel} alt="relevelLogo" className="edu-logo" />
              </span>
              Relevel by Unacademy
            </p>
            <p className="edu-course">Frontend Development</p>
            <p className="edu-duration">july 2022 - may 2023</p>
            <a
              href="https://drive.google.com/file/d/1ZxJFSE7iCHlli2rbz2tk9A1KeUQba4BT/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              
              <button className="edu-cert-btn">Certificate</button>
            </a>
            <br />
            {/* <p className="edu-institute">
              <span>
                <img src={udemyimg} alt="relevelLogo" className="edu-logo" />
              </span>
              Udemy
            </p>
            <p className="edu-course">Web Development</p>
            <p className="edu-duration">july 2022 - may 2023</p> */}
            {/* <a
              href=""
              target="_blank"
              rel="noreferrer"
            > */}
              
              {/* <button className="edu-cert-btn">Certificate</button> */}
            {/* </a> */}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Education;
