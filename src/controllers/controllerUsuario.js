import { serviceUsuario } from '../services/serviceUsuario.js'

export class controllerUsuario {
  async listaUsuarios(req, res) {
    const usuarios = await new serviceUsuario().listaUsuarios()
    return res.send(usuarios)
  }

  async adicionaUsuario(req, res) {
    const { nome, email, senha, cpf, rg } = req.body
    const usuario = await new serviceUsuario().adicionaUsuario(
      nome,
      email,
      senha,
      cpf,
      rg
    )
    return res.status(201).send(usuario)
  }
}
