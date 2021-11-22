import * as React from "react";
import styles from "./Footer.scss";
import Link from "../BaseComponents/Link/Link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => (
  <footer className={styles.footer}>
    <section>
      <article>
        <h2>About</h2>
        <p className={styles.about}>
          This project was made be React, Redux, Typescript and Webpack, and the
          reason why I&apos;ve chose these ones are described in the Readme.
        </p>
      </article>
      <article>
        <h2>Links</h2>
        <ul>
          <li>
            <Link target="_blank" href="https://www.ds.pl/">
              DynamicSolutions
            </Link>
          </li>
          <li>
            <Link target="_blank" href="http://findersen.com">
              My portfolio
            </Link>
          </li>
          <li>
            <Link target="_blank" href="http://google.com">
              Google
            </Link>
          </li>
          <li>
            <Link target="_blank" href="http://facebook.com">
              Facebook
            </Link>
          </li>
        </ul>
      </article>
      <article>
        <h2>Contact</h2>
        <ul>
          <li>
            <Link className={styles.phone} href="tel:+36205136009">
              <AiOutlinePhone />
              <span>+36 20 513 6009</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.email}
              href="mailto:mate.szabo@findersen.com"
            >
              <AiOutlineMail />
              <span>mate.szabo@findersen.com</span>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  </footer>
);

export default Footer;
