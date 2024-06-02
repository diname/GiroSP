export class serviceProdutosProposta {
  async listaProdutosProposta(proposta) {
    return `Teste lista de produtos da proposta ${proposta}`
  }

  async adicionaProdutoProposta(proposta, nome) {
    return `Produto ${nome} adicionado a proposta ${proposta}!`
  }
}
