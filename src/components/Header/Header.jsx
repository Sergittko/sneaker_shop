import logo from "../../img/logo/logo2.png";
import style from "./Header.module.scss";
import ThemeSwitcher from "../../assets/themeSwitcher/themeSwitcher";
import LanguageSwitcher from "../../assets/languageSwitcher/languageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

let Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={style.headerContainer}>
      <div className={style.headerLogo}>
        <img src={logo} alt="logo" />
        <h2>Sneakers Shop</h2>
      </div>
      <nav className={style.headerNavigation}>
        <ul>
          <li>
            <Link to="/">{t("menu.main")}</Link>
          </li>
          <li>
            <Link to="/sneakers">{t("menu.sneakers")}</Link>
          </li>
          <li>
            <Link to="/cart">{t("menu.cart")}</Link>
          </li>
        </ul>
      </nav>
      <div className={style.headerSwithers}>
        <ThemeSwitcher />
        <LanguageSwitcher changeLanguage={changeLanguage} />
      </div>
    </header>
  );
};

export default Header;
