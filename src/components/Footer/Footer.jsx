import logo from "../../img/logo/logo2.png";
import style from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
let Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContent}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <h2>Sneakers Shop</h2>
        </div>
        <div>
          My projects on GitHub Pages:
          <div>Adaptive layout, using RestAPI: test-project.io</div>
          <div>Memory Game: memory-game.io</div>
          <div>ToDo List: to-do-list.io</div>
          <div>Sergio Diorov, Front-End developer from Ukraine.</div>
          <div>https://github.com/Sergittko</div>
          <div>https://www.linkedin.com/in/sergiy-diorov-673a59254/</div>
        </div>
      </div>
      <small>&copy; Copyright 2023, Sergio Diorov</small>
    </footer>
  );
};

export default Footer;
