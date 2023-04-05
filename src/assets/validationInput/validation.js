import { useTranslation } from "react-i18next";
import i18n from "i18next";

export const validation = {
  email(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        email: i18n.t("inputErrors.enterEmail"),
      }));
    }

    if (value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$") === null) {
      return setError((errors) => ({
        ...errors,
        email: i18n.t("inputErrors.incorrect"),
      }));
    }
  },

  name(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        name: i18n.t("inputErrors.enterFullName"),
      }));
    }

    if (value.match("^[a-zA-Z]+( [a-zA-Z]+)+$") === null) {
      return setError((errors) => ({
        ...errors,
        name: i18n.t("inputErrors.enterFirstAndLastName"),
      }));
    }
  },

  address(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        address: i18n.t("inputErrors.enterAddress"),
      }));
    }
  },

  city(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        city: i18n.t("inputErrors.enterCity"),
      }));
    }
  },

  zip(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        zip: i18n.t("inputErrors.enterZip"),
      }));
    }

    if (value.match("\\d{5}") === null) {
      return setError((errors) => ({
        ...errors,
        zip: i18n.t("inputErrors.incorrectZip"),
      }));
    }
  },

  telephone(value, setError) {
    if (value.length !== 10 && value.length !== 13 && value.length !== 12) {
      return setError((errors) => ({
        ...errors,
        telephone: i18n.t("inputErrors.wrongNumberDigits"),
      }));
    }
    if (
      value.match("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$") ===
      null
    ) {
      return setError((errors) => ({
        ...errors,
        telephone: i18n.t("inputErrors.incorrectTelephone"),
      }));
    }
  },
};
