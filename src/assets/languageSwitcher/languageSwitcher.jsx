import style from "./languageSwitcher.module.scss";
import { useState } from "react";
import uaIcon from "../../img/icons/ua_flag.svg";
import engIcon from "../../img/icons/uk_flag.svg";

let LanguageSwitcher = ({ changeLanguage }) => {
  let languages = ["ENG", "UA"];
  const [currentLang, setLang] = useState(languages[0]);

  const changeToEn = () => {
    changeLanguage("en");
    setLang(languages[0]);
  };
  const changeToUa = () => {
    changeLanguage("ua");
    setLang(languages[1]);
  };

  return (
    <div className={style.switchContainer}>
      {currentLang === languages[0] ? (
        <div className={style.ua} onClick={() => changeToUa()}>
          <img src={uaIcon} alt="ua" />
        </div>
      ) : (
        <div className={style.eng} onClick={() => changeToEn()}>
          <img src={engIcon} alt="ua" />
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
