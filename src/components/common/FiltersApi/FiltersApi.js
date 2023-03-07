export const filtersApi = {
  filterByPrice(price, sneakersData) {
    if (!price.from && !price.to) return sneakersData;
    return [...sneakersData].filter((item) => {
      return item.price >= price.from && item.price <= price.to;
    });
  },

  filterByYear(year, sneakersData) {
    if (!year.from && !year.to) return sneakersData;
    return [...sneakersData].filter((item) => {
      return item.year >= year.from && item.year <= year.to;
    });
  },

  filterByBrand(brands, sneakersData) {
    if (brands.length === 0) return sneakersData;
    let newData = [];

    [...sneakersData].forEach((item) => {
      brands.forEach((brand) => {
        if (item.brand === brand) {
          newData.push(item);
        }
      });
    });
    return newData;
  },

  filterByModel(model, sneakersData) {
    if (model.length === 0) return sneakersData;
    let newData = [];

    [...sneakersData].forEach((item) => {
      model.forEach((model) => {
        if (item.model?.toLowerCase() === model.toLowerCase()) {
          newData.push(item);
        }
      });
    });
    return newData;
  },

  filterBySize(size, sneakersData) {
    if (size.length === 0) return sneakersData;
    let newData = [];

    sneakersData.forEach((item) => {
      if (item.size.includes(size[0])) {
        newData.push(item);
      }
    });
    if (size.length > 1) {
      newData.forEach((item, index) => {
        for (let i = 1; i < size.length; i++) {
          if (!item.size.includes(size[i])) {
            delete newData[index];
          }
        }
      });
    }

    return newData.filter((item) => item !== undefined);
  },
};

export const sortSneakersData = (data, option) => {
  let sneakersData = JSON.parse(JSON.stringify(data));
  switch (option) {
    case "Low":
      return sneakersData.sort((item1, item2) => item1.price - item2.price);
    case "High":
      return sneakersData.sort((item1, item2) => item2.price - item1.price);
    case "Newest":
      return sneakersData.sort((item1, item2) => item2.year - item1.year);
    case "Trending":
      return sneakersData.sort(
        (item1, item2) => item1.trending - item2.trending
      );

    default:
      return sneakersData;
  }
};
