import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./Main.module.scss";
import bg from "../../../img/mian_bg3.jpg";
import MainCard from "./MainCard/MainCard";
import DefaultButton from "./../../common/defaultButton/DefaultButton";
import bg1 from "../../../img/aboutSectionBg/bg1.jpg";
import bg2 from "../../../img/aboutSectionBg/bg4.jpg";

let Main = ({ staffPics, newReleases }) => {
  const { t } = useTranslation();
  return (
    <main className={style.mainContainer}>
      <section className={style.sectionHeaeder}>
        <div className={style.imageBackground}>
          <img
            alt="DUNK LOW PREMIUM 'MONREAL BAGEL SESAME' Hero Piicture Desctop"
            src={bg}
          />
        </div>
        <div className={style.informationContainer}>
          <div>
            <h1>DUNK LOW PREMIUM 'MONTREAL BAGEL SESAME'</h1>
            <Link to="/sneakers">{t("mainSection.shopNow")}</Link>
          </div>
        </div>
      </section>
      <section className={style.category}>
        <h2>{t("mainSection.newReleases.title")}</h2>
        <div className={style.sneakersSection}>
          {newReleases &&
            newReleases.map((item) => {
              return (
                <MainCard
                  key={item.imageURL}
                  id={item.id}
                  image={item.imageURL}
                  brand={item.brand}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  srcset={item.srcset}
                />
              );
            })}
        </div>
        <div className={style.categoryButton}>
          <Link to="/sneakers">
            <DefaultButton
              innerText={t("mainSection.newReleases.button")}
              color="#000"
            />
          </Link>
        </div>
      </section>

      <section className={style.category}>
        <h2>{t("mainSection.staffPicks.title")}</h2>
        <div className={style.sneakersSection}>
          {staffPics &&
            staffPics.map((item) => {
              return (
                <MainCard
                  key={item.imageURL}
                  id={item.id}
                  image={item.imageURL}
                  brand={item.brand}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  srcset={item.srcset}
                />
              );
            })}
        </div>
        <div className={style.categoryButton}>
          <Link to="/sneakers">
            <DefaultButton
              innerText={t("mainSection.staffPicks.button")}
              color="#000"
            />
          </Link>
        </div>
      </section>

      <section className={style.aboutSection}>
        <div className={style.itemContainer}>
          <div className={style.imageContainer}>
            <img src={bg1} alt="storeImage" />
          </div>
          <h2>{t("mainSection.about.titleStore")}</h2>
          <p>{t("mainSection.about.textStore")}</p>
        </div>
        <div className={style.itemContainer}>
          <div className={style.imageContainer}>
            <img src={bg2} alt="sneakers" />
          </div>
          <h2>{t("mainSection.about.titleHistory")}</h2>
          <p>{t("mainSection.about.textHistory")}</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
