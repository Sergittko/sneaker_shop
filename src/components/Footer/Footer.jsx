import logo from "../../img/logo/logo2.png";
import style from "./Footer.module.scss";
import FooterContacts from "./FooterContacts/FooterContacts";

let Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContent}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <h2>Sneakers Shop</h2>
        </div>
        <div className={style.footerInformation}>
          <div className={style.skills}>
            <h4>My stack:</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3, SCSS</li>
              <li>JavaScript</li>
              <li>React, Redux</li>
              <li>Ajax</li>
              <li>RestAPI</li>
            </ul>
          </div>

          <div className={style.projects}>
            <h4>My projects on GitHub Pages:</h4>
            <ul>
              <li>
                Adaptive layout, using RestAPI:
                <a
                  href="https://sergittko.github.io/test-pet-project/"
                  title="Adaptve layout"
                  target="_blank"
                  rel="noreferrer"
                >
                  test-project.io
                </a>
              </li>
              <li>
                Memory Game:
                <a
                  href="https://sergittko.github.io/memory-game/"
                  title="Memory game"
                  target="_blank"
                  rel="noreferrer"
                >
                  memory-game.io
                </a>
              </li>
              <li>
                ToDo List:
                <a
                  href="https://sergittko.github.io/to-do-list/"
                  title="To Do List"
                  target="_blank"
                  rel="noreferrer"
                >
                  to-do-list.io
                </a>
              </li>
            </ul>
          </div>

          <FooterContacts />
        </div>
      </div>
      <small>&copy; Copyright 2023, Sergio Diorov</small>
    </footer>
  );
};

export default Footer;
