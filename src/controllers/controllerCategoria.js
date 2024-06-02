import { serviceCategoria } from '../services/serviceCategoria.js'

export class controllerCategoria {
  async listaCategorias(req, res) {
    const service = new serviceCategoria()
    let categoria = await service.listaCategorias()
    return res.send(categoria)
  }

  async adicionaCategoria(req, res) {
    const { nome } = req.body
    const categoria = await new serviceCategoria().adicionaCategoria(nome)
    return res.status(201).send(categoria)
  }
}
