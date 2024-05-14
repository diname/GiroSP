import { serviceProduto } from '../services/serviceProduto.js'

export class controllerProduto {
  async listaProdutos(req, res) {
    const service = new serviceProduto()
    const produtos = await service.listaProdutos()
    return res.send(produtos)
  }
}
