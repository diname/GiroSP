import prisma from '../prisma/prisma.js'

export class serviceConsultor {
  async listaConsultores() {
    const consultores = await prisma.consultor.findMany()
    return consultores
  }
  async adicionaConsultor(nome, email, senha, cpf, rg) {
    const consultor = await prisma.consultor.create({
      data: {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        rg: rg
      }
    })
    return `Consultor adicionado com sucesso!`
  }
}
