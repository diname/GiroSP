import { serviceUsuario } from '../services/serviceUsuario.js'

export class controllerUsuario {
  async usuarios(req, res) {
    const service = new serviceUsuario()
    const usuarios = await service.listaUsuarios()
    return res.send(usuarios)
  }
}
