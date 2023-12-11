import api from './api';

class ProdutoApi {
  async bucasTodosOsProdutos() {
    const response = await api.get('/produtos/');
    return response.data;
  }
  async salvarProduto(produto) {
    let response;
    if (produto.id) {
      response = await api.put(`/produtos/${produto.id}/`, produto);
    } else {
      response = await api.post('/produtos/', produto);
    }
    return response.data;
  }
}

export default new ProdutoApi();