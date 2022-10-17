// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const saveCartItems = require("./helpers/saveCartItems");

// const saveCartItems = require("./helpers/saveCartItems");

// const { fetchItem } = require("./helpers/fetchItem");

//  const { fetchProducts } = require("./helpers/fetchProducts");

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
 const functionSaveCartItems = () => {
  const item = document.getElementsByClassName('cart__item');
  const array = [];
  for (const itens of item) {
    const value = itens.textContent;
    array.push(value);
  }
  saveCartItems(array);
};
 const cartItemClickListener = (event) => {
  event.target.remove();
  functionSaveCartItems();
};
 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  // cartItemClickListener();
  return li;
};

 const addProduct = async (event) => {
  const pai = event.target.parentNode;
  const idFirstChild = pai.firstChild.innerText;
  const dadosProduto = await fetchItem(idFirstChild);
  const pai2 = document.querySelector('.cart__items');
  const filho = createCartItemElement(dadosProduto);
  pai2.appendChild(filho);
  functionSaveCartItems();
  price(idFirstChild);
};

const recuperaLocalStorage = () => {
  const pai = document.querySelector('.cart__items');
  const storage = getSavedCartItems();
  const storageArray = JSON.parse(storage);
  // console.log(storageArray);
  storageArray.forEach((itens) => {
    const li = document.createElement('li');
    li.className = '.cart__item';
    li.innerText = itens;
    pai.appendChild(li);
    li.addEventListener('click', cartItemClickListener);
  });
};

//  const addCarrinho = (event) => {
//   const pai = event.target.parentNode;
//   const idFirstChild = pai.firstChild.innerText;
//   addProduct(idFirstChild);
// };
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  const btnCarrinho = document.querySelectorAll('.item__add');
  btnCarrinho.forEach((el) => el.addEventListener('click', addProduct));

  return section;
};
const adicionaObjetosNoHTML = async (product) => {
  const object = await fetchProducts(product);
  object.forEach((produto) => {
    const pai = document.querySelector('.items');
    const filho = createProductItemElement(produto);
    pai.appendChild(filho);
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

// const btnCarrinho = document.getElementsByClassName('item__add');
// const addCarrinho = () => {
//   for (const btn of btnCarrinho) {
//     btn.addEventListener('click', () => {
//       const pai = btn.parentNode;
//       const filhoId = pai.firstChild;
//       const id = filhoId.textContent;
//       addProduct(id);
//     });
//   }
// };
const price = async (id) => {
  // const preco = document.querySelectorAll('.cart__item');
  let valorInicial = 0;
  // const array = [];
  // preco.forEach((produto) => {
  //   const stringPreco = produto.innerText.split(' | ');
  //   const number = stringPreco.replace(/[^0-9]/g, '');
  //   console.log(number);
  //   array.push(stringPreco[2]);
  // });
  const a = await fetchItem(id);
  const priceProduct = a.price;
  valorInicial += priceProduct;
  // array.push(priceProduct);
  console.log(valorInicial);
};
// price();
window.onload = () => { 
  adicionaObjetosNoHTML('computador');
  const aaa = JSON.parse(getSavedCartItems());
  if (aaa) {
    recuperaLocalStorage();
  }
  // recuperaLocalStorage();
  // functionSaveCartItems();
};