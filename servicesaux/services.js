const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };


const PriceMaxMin = (pmax,pmin,products)=> {

  let pricemaxmin = products.filter(
      (e) => e.price > pmin && e.price < pmax );
    return pricemaxmin
}

const ordenFunc = (orden,products) => {
    if (!orden || orden === "abc") {
      let sortAbc = products.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
     return sortAbc
    }
    if (orden === "cba") {
      let sortAbc = products.sort(function (a, b) {
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      return sortAbc
    }
    if (orden === "pricemax") {
      let sortAbc = products.sort(function (a, b) {
        if (b.price > a.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });

      return sortAbc
    }
    if (orden === "pricemin") {
      let sortAbc = products.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (b.price > a.price) {
          return -1;
        }
        return 0;
      });
      return sortAbc
    }
    if (orden === "discountmin") {
        let sortAbc = products.sort(function (a, b) {
          if (a.discount > b.discount) {
            return 1;
          }
          if (b.discount > a.discount) {
            return -1;
          }
          return 0;
        });
        return sortAbc
      }
      if (orden === "discountmax") {
        let sortAbc = products.sort(function (a, b) {
          if (a.discount < b.discount) {
            return 1;
          }
          if (b.discount < a.discount) {
            return -1;
          }
          return 0;
        });
        return sortAbc
      }
}

module.exports = {removeAccents,PriceMaxMin,ordenFunc} 