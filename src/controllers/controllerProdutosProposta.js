import { serviceProdutosProposta } from '../services/serviceProdutosProposta.js'

export class controllerProdutosProposta {
  async listaProdutosProposta(req, res) {
    const proposta = req.params.proposta
    const produtosProposta =
      await new serviceProdutosProposta().listaProdutosProposta(proposta)
    return res.send(produtosProposta)
  }
  async adicionaProdutoProposta(req, res) {
    const proposta = req.params.proposta
    const { nome } = req.body
    const produtoProposta =
      await new serviceProdutosProposta().adicionaProdutoProposta(
        proposta,
        nome
      )
    return res.send(produtoProposta)
  }
}
