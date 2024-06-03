export class serviceUsuario {
  async listaUsuarios() {
    return `Teste lista de usuários`
  }

  async adicionaUsuario(nome, email) {
    return `Usuário ${nome} criado com sucesso!`
  }
}
