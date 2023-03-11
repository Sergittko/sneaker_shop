import style from "./Cart.module.scss";
import OrderCard from "./OrderCard/OrderCard";
import DefaultButton from "./../../common/defaultButton/DefaultButton";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

let Cart = ({ cartData, deleteItem, setQuantinyTh }) => {
  const { t } = useTranslation();

  return (
    <section className={style.cartContainer}>
      {!!cartData && cartData?.length !== 0 ? (
        <div>
          <h1>{t("cartSection.title")}</h1>
          {cartData &&
            cartData.map((order) => {
              return (
                <OrderCard
                  key={order.createdAt}
                  name={order.name}
                  image={order.image}
                  price={order.price}
                  srcSet={order.srcSet}
                  size={order.size}
                  id={order.id}
                  total={order.total}
                  deleteItem={deleteItem}
                  setQuantinyTh={setQuantinyTh}
                />
              );
            })}
          <div className={style.totalOreder}>
            <p>{t("cartSection.total")}</p>
            <p>
              $
              {cartData &&
                cartData.reduce((totalPrice, order) => {
                  let orderTotal = order.price * order.total;
                  return totalPrice + orderTotal;
                }, 0)}
              .00
            </p>
          </div>
          <div className={style.buttonContainer}>
            <Link to={"/cart/place_order"}>
              <DefaultButton
                innerText={t("cartSection.buttonOrder")}
                color="#000"
              />
            </Link>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
