import prisma from '../prisma/prisma.js'

export class serviceUsuario {
  async listaUsuarios() {
    return `Teste lista de usuários`
  }

  async adicionaUsuario(nome, email, senha, cpf, rg) {
    const user = prisma.usuario.create({
      data: {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        rg: rg
      }
    })
    return `Usuário criado com sucesso!`
  }
}
