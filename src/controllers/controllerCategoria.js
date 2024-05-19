import { serviceCategoria } from '../services/serviceCategoria.js'

export class controllerCategoria {
  async listaCategorias(req, res) {
    const service = new serviceCategoria()
    let categoria = await service.listaCategorias()
    return res.send(categoria)
  }

  async adicionaCategoria(req, res) {
    const categoria = await new serviceCategoria().adicionaCategoria()
    return res.send(categoria)
  }
}
