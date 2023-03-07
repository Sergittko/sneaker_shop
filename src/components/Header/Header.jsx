import logo from "../../img/logo/logo2.png";
import style from "./Header.module.scss";
import ThemeSwitcher from "../../assets/themeSwitcher/themeSwitcher";
import LanguageSwitcher from "../../assets/languageSwitcher/languageSwitcher";
import FavoriteItems from "../../assets/favoriteItems/FavoriteItems";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

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
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/"
            >
              {t("menu.main")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/sneakers"
            >
              {t("menu.sneakers")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/cart"
            >
              {t("menu.cart")}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.headerSwithers}>
        <FavoriteItems />
        <ThemeSwitcher />
        <LanguageSwitcher changeLanguage={changeLanguage} />
      </div>
    </header>
  );
};

export default Header;
