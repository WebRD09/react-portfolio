import React from "react";
import "./contact.css";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="c">
      <div className="c-left">
        <div className="c-bg">Contact Me</div>
      </div>
      <div className="c-right">
        <form ref={formRef} onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
}
