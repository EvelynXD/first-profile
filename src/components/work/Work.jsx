import React from "react";
import olshop from "../../assets/olshop.jpg";
import "./work.css";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work__title">
        <div className="work__typography">
          <h2>work</h2>
          <h2>work</h2>
          <h2>work</h2>
        </div>
        <span>Featured Projects</span>
      </div>
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <img
              className="work__image"
              src={olshop}
              alt="outfit online shop"
            />
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://kebelet-iphone.vercel.app/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">01.</span>
            <div className="work__subtitle">
              <span className="title__link">Kebelet Iphone</span>
              <p>Web Application</p>
            </div>
          </div>
        </div>
      </div>
    <br />
    <br />
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://kuru-kuru.vercel.app/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">02.</span>
            <div className="work__subtitle">
              <span className="title__link">Herta Kuru</span>
              <p>Web Annoying</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://evelyn-terminal.vercel.app/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">03.</span>
            <div className="work__subtitle">
              <span className="title__link">Terminal Portfolio</span>
              <p>Terminal Linux</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="http://evelynxd.github.io/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">04.</span>
            <div className="work__subtitle">
              <span className="title__link">Portfolio 3</span>
              <p>Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://evelynxd.github.io/Snake-/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">05.</span>
            <div className="work__subtitle">
              <span className="title__link">Snake</span>
              <p>Game</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://evelynxd.github.io/firework-2023/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">06.</span>
            <div className="work__subtitle">
              <span className="title__link">Fireworks 2023</span>
              <p>Happy New Year!</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://evelynxd.github.io/Block-ninja/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">07.</span>
            <div className="work__subtitle">
              <span className="title__link">Block Ninja</span>
              <p>Game</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
