import React from "react";
import "./about.css";
import about from "../../Img/about.png";

export default function About() {
  return (
    <div className="a">
      <div className="a-left a-bg">
        <h1>WHO AM I ?</h1>
        <a
          href="https://www.linkedin.com/in/raj-sankhavara-a31059217/"
          target="blank"
        >
          Linkedin
        </a>
      </div>

      <div className="a-right">
        <img src={about} alt="" className="a-img" />
      </div>
    </div>
  );
}
