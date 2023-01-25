import style from "./App.module.scss";
import Header from "./components/Header/Header";
import Sneakers from "./components/MainContent/SneakersSection/Sneakers";
import Main from "./components/MainContent/MainSection/Main";
import Cart from "./components/MainContent/CartSection/Cart";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/common/preloader/Preloader";
import { Routes, Route } from "react-router-dom";

let App = () => {
  return (
    <div>
      <Header />
      <main className={style.mainContent}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Preloader />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
