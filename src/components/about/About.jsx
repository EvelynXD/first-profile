import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__typography">
          <span>about me</span>
          <span>about me</span>
          <span>about me</span>
        </div>
        <div className="about__text">
          <span>
            Hello! I am EvelynXD, I am passionate about
            <span className="about__outline">
              {" "}
              developing applications
            </span>{" "}
            both <span className="about__outline"> user interface</span> and
            database <span className="about__outline"> management</span> system.
          </span>
          <span className="about__button">
            <Link to="https://open.spotify.com/user/31z2idpn5eieetgvh6x6kzjvrqlu?si=1-lb4oeTQT-S_JocsucFug&utm_source=copy-link">
              Read More About Me <i class="uil uil-arrow-up-right"></i>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
