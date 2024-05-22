export class serviceProdutosProposta {
  async listaProdutosProposta(proposta) {
    const message = `Teste lista de produtos da proposta ${proposta}`
    return message
  }

  async adicionaProdutoProposta(proposta, nome) {
    const message = `Produto ${nome} adicionado a proposta ${proposta}!`
    return message
  }
}
