require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verifique se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Ao chamar a função com o argumento do item MLB1615760527 e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se, ao chamar a função fetchItem com o argumento do item MLB1615760527, a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Teste se o retorno da funcao fetchItem com o argumento do item MLB1615760527 é uma estrutura de dados igual ao objeto item que está implementado no arquivo', async () => {
    await fetchItem('MLB1615760527');
    expect(fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Teste se ao chamar a função fetchItem sem parametro, retorna um erro', async () => {
    await fetchItem();
    expect(fetchItem()).toThrow(/^You must provide an url$/);
  });
  // fail('Teste vazio');
});
