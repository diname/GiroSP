import serviceUsuario from '../services/serviceUsuario'

export class controllerUsuario {
  async usuarios(req, res) {
    let usuario = await serviceUsuario.listaUsuarios()
    return res.send(usuario)
  }
}
