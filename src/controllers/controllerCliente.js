import { serviceCliente } from '../services/serviceCliente.js'

export class controllerCliente {
  async listaClientes(req, res) {
    const clientes = await new serviceCliente().listaClientes()
    return res.send(clientes)
  }

  async adicionaCliente(req, res) {
    const cliente = await new serviceCliente().adicionaCliente()
    return res.send(cliente)
  }
}
