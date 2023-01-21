import style from "./App.module.scss";
import Header from "./components/Header/Header";
import Sneakers from "./components/MainContent/SneakersSection/Sneakers";
import Footer from "./components/Footer/Footer";

let App = () => {
  return (
    <div>
      <Header />
      <main className={style.mainContent}>
        <Sneakers />
      </main>
      <Footer />
    </div>
  );
};

export default App;
