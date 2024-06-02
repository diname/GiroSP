import { serviceCliente } from '../services/serviceCliente.js'

export class controllerCliente {
  async listaClientes(req, res) {
    const clientes = await new serviceCliente().listaClientes()
    return res.send(clientes)
  }

  async adicionaCliente(req, res) {
    const { nome } = req.body
    const cliente = await new serviceCliente().adicionaCliente(nome)
    return res.status(201).send(cliente)
  }
}
