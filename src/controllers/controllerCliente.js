import { serviceClientes } from '../services/serviceCliente.js'

export class controllerCliente {
  async listaClientes(req, res) {
    const service = new serviceClientes()
    const clientes = await service.listaClientes()
    return res.send(clientes)
  }
}
