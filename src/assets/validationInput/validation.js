import { useTranslation } from "react-i18next";

export const validation = {
  email(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        email: "enter email address",
      }));
    }

    if (value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$") === null) {
      return setError((errors) => ({
        ...errors,
        email: "incorrect email address",
      }));
    }
  },

  name(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        name: "enter your full name",
      }));
    }

    if (value.match("^[a-zA-Z]+( [a-zA-Z]+)+$") === null) {
      return setError((errors) => ({
        ...errors,
        name: "enter first and last name",
      }));
    }
  },

  address(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        address: "enter your address",
      }));
    }
  },

  city(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        city: "enter your city",
      }));
    }
  },

  zip(value, setError) {
    if (value.length < 2) {
      return setError((errors) => ({
        ...errors,
        zip: "enter zip code",
      }));
    }

    if (value.match("\\d{5}") === null) {
      return setError((errors) => ({
        ...errors,
        zip: "incorrect zip code",
      }));
    }
  },

  telephone(value, setError) {
    if (value.length !== 10 && value.length !== 13 && value.length !== 12) {
      return setError((errors) => ({
        ...errors,
        telephone: "wrong number of digits",
      }));
    }
    if (
      value.match("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$") ===
      null
    ) {
      return setError((errors) => ({
        ...errors,
        telephone: "incorrect telephone number",
      }));
    }
  },
};
