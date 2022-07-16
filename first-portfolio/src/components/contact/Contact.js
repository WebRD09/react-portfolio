import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [display, setDisplay] = useState("none");
  const [confirm, setConfirm] = useState("");
  const [color, setColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3f61t0h",
        "template_bef70jr",
        e.target,
        "LiM7X4_wWah2gEuSA"
      )
      .then(
        () => {
          e.target.reset();
          setConfirm("Message sent successfully");
          setColor("green");
          setDisplay("block");
          setTimeout(() => {
            setDisplay("none");
          }, 4000);
        },
        (error) => {
          setConfirm("Mail is not sended.There is some issue");
          setColor("red");
          setDisplay("block");
          setTimeout(() => {
            setDisplay("none");
          }, 4000);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-left">
        <div className="c-bg">Contact Me</div>
      </div>
      <div className="c-right">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            autocomplete="off"
            required
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            autocomplete="off"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            autocomplete="off"
            required
          />
          <textarea
            name="text"
            id="text"
            rows="5"
            placeholder="Your message !!"
            required
          ></textarea>
          <button>Send</button>
        </form>
        <div
          className="confirm"
          style={{ display: display, backgroundColor: color }}
        >
          {confirm}
        </div>
      </div>
    </div>
  );
}
