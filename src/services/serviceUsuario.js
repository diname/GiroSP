export class serviceUsuario {
  async listaUsuarios() {
    const message = `Teste lista de usuários`
    return message
  }

  async adicionaUsuario(nome, email) {
    const message = `Usuário ${nome} criado com sucesso, email ${email}!`
    return message
  }
}
