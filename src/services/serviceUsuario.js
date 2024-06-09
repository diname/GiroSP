import prisma from '../prisma/prisma.js'

export class serviceUsuario {
  async listaUsuarios() {
    const users = await prisma.usuario.findMany()
    return users
  }

  async adicionaUsuario(nome, email, senha, cpf, rg) {
    const user = await prisma.usuario.create({
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
