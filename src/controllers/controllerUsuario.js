import { serviceUsuario } from '../services/serviceUsuario.js'

export class controllerUsuario {
  async listaUsuarios(req, res) {
    const usuarios = await new serviceUsuario().listaUsuarios()
    return res.send(usuarios)
  }

  async adicionaUsuario(req, res) {
    const usuario = await new serviceUsuario().adicionaUsuario()
    return res.send(usuario)
  }
}
