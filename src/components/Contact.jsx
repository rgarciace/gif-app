import React from 'react'

import { FaFacebook, FaGithub } from "react-icons/fa";

const Contact = ({ name, fb, git}) => {
  return (
    <div class="contact-footer">
      {name}
      <ul>
        <li>
          <a href={fb}>
            <FaFacebook></FaFacebook>
          </a>
        </li>
        <li>
          <a href={git}>
            <FaGithub></FaGithub>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact