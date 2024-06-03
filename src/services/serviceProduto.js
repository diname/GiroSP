export class serviceProduto {
  async listaProdutos() {
    return `Teste lista de produtos`
  }

  async adicionaProduto(nome) {
    return `Produto ${nome} cadastrado com sucesso!`
  }
}
