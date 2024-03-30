import prismaClient from '../../prisma'

class ListSellerService {
  async execute() {
    const sellers = await prismaClient.vendedor.findMany({
      select: {
        status: true,
        codigo_vendedor: true,
        nome: true,
        email: true,
        senha: true,
        cpf: true,
        rg: true
      }
    })
    return sellers
  }
}

export { ListSellerService }
