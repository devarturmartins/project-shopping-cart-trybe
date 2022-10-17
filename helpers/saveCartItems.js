const saveCartItems = (value) => {
  // seu código aqui
  const KEY = 'cartItems';
  localStorage.setItem(KEY, JSON.stringify(value));
};
// saveCartItems();
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
