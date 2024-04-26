import React from "react";
import playStore from "../../../images/avatar.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>Lokesh Khandelwal</p>
        <img src={playStore} alt="playstore" />
      </div>

      <div className="midFooter">
        <h1>iStore</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; lokesh1911e</p>
      </div>

      <div className="rightFooter">
        <h3>Feel free to connect with me</h3>
        <a href="https://www.linkedin.com/in/lokesh1911e/">linkedin</a>
        <a href="https://www.instagram.com/lokesh_khandelwal_/">Instagram</a>
        <a href="https://github.com/LokeshKhandelwal">Github</a>
        <a href="https://leetcode.com/lokesh1911e/">leetcode</a>
      </div>
    </footer>
  );
};

export default Footer;
