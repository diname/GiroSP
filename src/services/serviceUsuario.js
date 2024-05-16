export class serviceUsuario {
  async listaUsuarios(req, res) {
    const message = `Teste lista de usuários`
    return message
  }

  async adicionaUsuario(req, res) {
    let message = `Usuário criado com sucesso!`
    return message
  }
}
