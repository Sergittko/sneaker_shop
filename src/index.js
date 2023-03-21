import "./index.scss";
import "./assets/i18n/i18n.js";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Preloader />}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
