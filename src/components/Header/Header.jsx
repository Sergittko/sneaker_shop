import logo from "../../img/logo/logo2.png";
import { ReactComponent as Cross } from "../../img/icons/plus.svg";
import { ReactComponent as Menu } from "../../img/icons/menu.svg";
import style from "./Header.module.scss";
import ThemeSwitcher from "../../assets/themeSwitcher/themeSwitcher";
import LanguageSwitcher from "../../assets/languageSwitcher/languageSwitcher";
import FavoriteItems from "../../assets/favoriteItems/FavoriteItems";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames";

let Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [activeBurger, setActiveBurger] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div id="outer" onClick={(e) => console.log(e.target)}>
      {windowSize > 760 ? (
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
      ) : (
        <header className={style.headerContainer}>
          <div className={style.headerLogo}>
            <img src={logo} alt="logo" />
            <h2>Sneakers Shop</h2>
          </div>
          <div
            className={style.menuButton}
            onClick={() => setActiveBurger(true)}
          >
            <Menu width="30" height="30" className={style.menuIcon} />
          </div>

          <div
            className={classNames(
              style.menuSidebar,
              activeBurger && style.activeMenu
            )}
          >
            <div className={style.headerLogo}>
              <div className={style.logoBlock}>
                <img src={logo} alt="logo" />
                <h2>Sneakers Shop</h2>
              </div>
              <div
                className={style.closeMenu}
                onClick={() => setActiveBurger(false)}
              >
                <Cross width="24" height="24" className={style.crossIcon} />
              </div>
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
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
