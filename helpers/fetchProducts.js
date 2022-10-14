const fetchProducts = async (product) => {
  // seu código aqui
  if (!product) {
    throw new Error('You must provide an url');
  }
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
  //  fetchProducts()
  //    .then((e) => console.log(e));