import { serviceProduto } from '../services/serviceProduto.js'

export class controllerProduto {
  async listaProdutos(req, res) {
    const produtos = await new serviceProduto().listaProdutos()
    return res.send(produtos)
  }

  async adicionaProduto(req, res) {
    const { nome } = req.body
    const produto = await new serviceProduto().adicionaProduto(nome)
    return res.status(201).send(produto)
  }
}
