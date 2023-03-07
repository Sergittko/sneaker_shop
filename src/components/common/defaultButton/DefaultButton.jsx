import style from "./DefaultButton.module.scss";

let DefaultButton = ({ innerText, color, isLink }) => {
  return (
    <div className={style.buttonContainer}>
      <button>{innerText}</button>
    </div>
  );
};

export default DefaultButton;
