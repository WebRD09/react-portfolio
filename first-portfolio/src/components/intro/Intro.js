import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            <span>&#128591;</span>
            Namaste, My Name is
          </h2>
          <h1 className="i-name">Raj Sankhavara</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Node.js Developer</div>
              <div className="i-title-item">React.js Developer</div>
              <div className="i-title-item">JavaScript Lover</div>
            </div>
          </div>
          <div className="buttons">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">WELCOME</div>
      </div>
    </div>
  );
}
