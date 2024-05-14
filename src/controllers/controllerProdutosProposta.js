import { serviceProdutosProposta } from '../services/serviceProdutosProposta.js'

export class controllerProdutosProposta {
  async listaProdutosProposta(req, res) {
    const service = new serviceProdutosProposta()
    const produtosProposta = await service.listaProdutosProposta()
    return res.send(produtosProposta)
  }
}
