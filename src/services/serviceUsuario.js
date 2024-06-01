export class serviceUsuario {
  async listaUsuarios() {
    const message = `Teste lista de usuários`
    return message
  }

  async adicionaUsuario(nome, email) {
    return `Usuário ${nome} criado com sucesso!`
  }
}
