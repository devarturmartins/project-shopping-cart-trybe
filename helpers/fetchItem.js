const fetchItem = async (id) => {
  // seu código aqui
  if (!id) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
