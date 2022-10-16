const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it ('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', async () => {
    await getSavedCartItems('MLB1978768665');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', async () => {
    await getSavedCartItems('MLB1978768665');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  // fail('Teste vazio');
});
