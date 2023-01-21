import logo from "../../img/logo/logo2.png";
import style from "./Header.module.scss";
import ThemeSwitcher from "../../assets/themeSwitcher/themeSwitcher";
import LanguageSwitcher from "../../assets/languageSwitcher/languageSwitcher";
import { useTranslation } from "react-i18next";
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
          <li>{t("menu.main")}</li>
          <li>{t("menu.sneakers")}</li>
          <li>{t("menu.cart")}</li>
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
