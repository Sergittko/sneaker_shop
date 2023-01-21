import preloader1 from "../../../img/preloader/preloader1.gif";
import preloader2 from "../../../img/preloader/preloader2.gif";
import style from "./Preloader.module.scss";

let Preloader = () => {
  return (
    <div className={style.preloaderContainer}>
      <img src={preloader2} alt="preloader" />
      <h1>Sneakers Shop</h1>
    </div>
  );
};

export default Preloader;
