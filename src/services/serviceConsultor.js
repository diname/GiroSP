import prisma from '../prisma/prisma.js'

export class serviceConsultor {
  async listaConsultores() {
    return `Teste lista de consultores`
  }
  async adicionaConsultor(nome, email) {
    const consultor = await prisma.consultor.create({
      data: {
        nome: nome,
        email: email
      }
    })
    return `Consultor ${nome} adicionado com sucesso!`
  }
}
