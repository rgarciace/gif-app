import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Contact = ({ name, fb, git }) => {
  return (
    <div className="contact-footer">
      {name}
      <ul>
        <li>
          <a href={fb} target="_blank">
            <FaFacebook></FaFacebook>
          </a>
        </li>
        <li>
          <a href={git} target="_blank">
            <FaGithub></FaGithub>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
