import style from "./SneakerCard.module.scss";

let SneakerCard = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          alt="Air Jordan 11 Retro 'Cherry'"
          src="https://cdn.flightclub.com/750/TEMPLATE/307015/1.jpg"
          srcSet="https://cdn.flightclub.com/75/TEMPLATE/307015/1.jpg 75w, https://cdn.flightclub.com/120/TEMPLATE/307015/1.jpg 120w, https://cdn.flightclub.com/150/TEMPLATE/307015/1.jpg 150w, https://cdn.flightclub.com/240/TEMPLATE/307015/1.jpg 240w, https://cdn.flightclub.com/375/TEMPLATE/307015/1.jpg 375w, https://cdn.flightclub.com/500/TEMPLATE/307015/1.jpg 500w, https://cdn.flightclub.com/750/TEMPLATE/307015/1.jpg 750w, https://cdn.flightclub.com/1000/TEMPLATE/307015/1.jpg 1000w, https://cdn.flightclub.com/1250/TEMPLATE/307015/1.jpg 1250w, https://cdn.flightclub.com/1500/TEMPLATE/307015/1.jpg 1500w, https://cdn.flightclub.com/1800/TEMPLATE/307015/1.jpg 1800w, https://cdn.flightclub.com/2200/TEMPLATE/307015/1.jpg 2200w, https://cdn.flightclub.com/2600/TEMPLATE/307015/1.jpg 2600w, https://cdn.flightclub.com/3000/TEMPLATE/307015/1.jpg 3000w, https://cdn.flightclub.com/3500/TEMPLATE/307015/1.jpg 3500w"
        />
      </div>
      <span className={style.brand}>Air Jordan</span>
      <h4 className={style.name}>Air Jordan 11 Retro 'Cherry'</h4>
      <span className={style.price}>$210+</span>
    </div>
  );
};

export default SneakerCard;
