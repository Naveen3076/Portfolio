import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            className={styles.img}
            alt="Email icon"
          />
          <a href="mailto:naveenc230076@gmail.com">naveenc230076@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            className={styles.img}
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/Naveenc</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            className={styles.img}
            alt="Github icon"
          />
          <a href="https://github.com/Naveen3076">github.com/Portfolio</a>
        </li>
      </ul>
    </footer>
  );
};
