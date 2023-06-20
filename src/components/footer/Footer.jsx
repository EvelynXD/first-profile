import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import picture from "../../assets/profileImage.jpg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src={picture} alt="Fachrur Rizhky" />
            <h1>Let's work together!</h1>
          </div>
          <div className="footer__button">
            <Link to="https://open.spotify.com/user/31z2idpn5eieetgvh6x6kzjvrqlu?si=1-lb4oeTQT-S_JocsucFug&utm_source=copy-link&nd=1">Listen!</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:a8900873@gmail.com">
              xdevelyn69@gmail.com
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://chat.whatsapp.com/K68w4UBv3O0DpiHqz9h2v1"
            >
              +62 821 1326 4009
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/eevelynxd?igshid=MzNlNGNkZWQ4Mg==
              "
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.kebelet-iphone.my.id/"
            >
              Bloggspot
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/EvelynXD"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/hasan.bangbross.9"
            >
              Facebook
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://discord.gg/rhhAQ63aUg"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
