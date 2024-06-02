export class serviceProduto {
  async listaProdutos() {
    const message = `Teste lista de produtos`
    return message
  }

  async adicionaProduto(nome) {
    return `Produto ${nome} cadastrado com sucesso!`
  }
}
