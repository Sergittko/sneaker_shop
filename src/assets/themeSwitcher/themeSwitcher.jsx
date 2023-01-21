import style from "./themeSwitcher.module.scss";
import { useState } from "react";

let ThemeSwitcher = () => {
  const [checked, setChecked] = useState(true);

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

// const isDarkMode = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
// const isLightMode = window.matchMedia(`(prefers-color-scheme: light)`).matches;
// const isNotSpecified = window.matchMedia(
//   `(prefers-color-scheme: no-preference)`
// ).matches;
// const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

// // $(document).ready(function () {
// // detect current theme
// let currentTheme = getUserThemePreference();

// // change theme if current theme exists
// setTheme(currentTheme);

// // detect toggle interaction
// // $("#themeSwitcher").on("change", toggleTheme);

// //   detect any changes in system preferences
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addListener((e) => e.matches && setTheme("dark"));
// window
//   .matchMedia("(prefers-color-scheme: light)")
//   .addListener((e) => e.matches && setTheme("light"));
// // });

// // get user's theme preference
// function getUserThemePreference() {
//   let preference = undefined;

//   // detect if there is an existing theme selection
//   const localStorageTheme = localStorage.getItem("currentTheme");
//   if (localStorageTheme) {
//     preference = localStorageTheme;
//   }

//   // detect system theme preference
//   if (isDarkMode) {
//     // prefers dark mode if no locally stored preference
//     preference = localStorageTheme ? localStorageTheme : "dark";
//   } else if (isLightMode) {
//     // prefers light mode if no locally stored preference
//     preference = localStorageTheme ? localStorageTheme : "light";
//   } else if (isNotSpecified || hasNoSupport) {
//     // default to light mode if no locally stored preference
//     preference = localStorageTheme ? localStorageTheme : "light";
//   }

//   return preference;
// }

// // Toggle theme switcher
// function toggleTheme() {
//   if (currentTheme === "light") {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
// }

// // switch Theme
// function setTheme(theme) {
//   let oldTheme, togglePosition;

//   if (theme === "light") {
//     oldTheme = "dark";
//     togglePosition = true;
//   } else {
//     oldTheme = "light";
//     togglePosition = false;
//   }
//   // change color variables
//   //   $("html").addClass(theme);
//   //   $("html").removeClass(oldTheme);

//   //   // switch toggle accordingly
//   //   $("#themeSwitcher").attr("checked", togglePosition);

//   // save preference
//   saveCurrentTheme(theme);
// }

// function saveCurrentTheme(theme) {
//   currentTheme = theme;
//   localStorage.setItem("currentTheme", theme);
// }
