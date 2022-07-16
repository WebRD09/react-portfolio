import React from "react";
import "./skill.css";

export default function Skill() {
  return (
    <div className="s">
      <div className="s-left">
        <div className="skills">
          <div className="html">
            <span>HTML</span>
          </div>
          <div className="css">
            <span>CSS</span>
          </div>
          <div className="js">
            <span>JAVASCRIPT</span>
          </div>
          <div className="php">
            <span>PHP</span>
          </div>
          <div className="react">
            <span>REACT.JS</span>
          </div>
          <div className="node">
            <span>NODE.JS</span>
          </div>
          <div className="sql">
            <span>SQL</span>
          </div>
          <div className="mongodb">
            <span>MONGODB</span>
          </div>
        </div>
      </div>
      <div className="s-right">
        <div className="r-bg">SKILLS</div>
      </div>
    </div>
  );
}
