import style from "./themeSwitcher.module.scss";
import { useState, useEffect } from "react";

let ThemeSwitcher = () => {
  let themeLocal = localStorage.getItem("theme");
  let currentTheme =
    themeLocal === "light" || themeLocal === null ? true : false;
  const [checked, setChecked] = useState(currentTheme);

  useEffect(() => {
    let theme = checked ? "light" : "dark";
    localStorage.setItem("theme", theme);
    let root = document.querySelector(":root");
    let components = [
      "body-background",
      "body-text-color",
      "components-background",
      "components-hover",
      "black-white",
      "border-items",
      "button-background",
      "sizePicker-disable-background",
      "sizePicker-disable-text",
      "sizePicker-border-hover",
      "sizePicker-checked",
      "heart-background",
      "heart-fill",
      "filter-button",
      "invert",
    ];
    components.forEach(
      (component) => {
        root &&
          root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
          );
      },
      [checked]
    );
  });

  return (
    <div className={style.cardToggle}>
      <input
        id="themeSwitcher"
        className={style.themeToggle}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

export default ThemeSwitcher;
