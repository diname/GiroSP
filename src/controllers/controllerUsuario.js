import { serviceUsuario } from '../services/serviceUsuario.js'

export class controllerUsuario {
  async usuarios(req, res) {
    const service = new serviceUsuario()
    let usuario = await service.listaUsuarios()
    return res.send(usuario)
  }
}
