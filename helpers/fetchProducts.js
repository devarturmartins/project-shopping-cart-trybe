const fetchProducts = async (product) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(url);
  const data = await response.json();
  const { results } = data;
  return results;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
  // fetchProducts('computador')
  //   .then((e) => console.log(e));