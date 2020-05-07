import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default (props) => (
  <nav className="navigation">
    {/* <Link to="/contact">Contact</Link> */}
    <a
      className="social-links-header"
      target="_blank"
      href="https://www.instagram.com/praveen__rana/"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a
      className="social-links-header"
      target="_blank"
      href="https://www.youtube.com/channel/UCFLC5nIB029SXKWcSwKCxPQ"
    >
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <ThemeChanger />
  </nav>
);
