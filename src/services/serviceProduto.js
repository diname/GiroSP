export class serviceProduto {
  async listaProdutos(req, res) {
    const message = `Teste lista de produtos`
    return message
  }

  async adicionaProduto(req, res) {
    const message = `Produto cadastrado com sucesso!`
    return message
  }
}
