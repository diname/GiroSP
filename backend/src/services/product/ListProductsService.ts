import prismaClient from '../../prisma'

class ListProductsService {
  async execute() {
    const products = await prismaClient.produto.findMany({
      select: {
        codigo_produto: true,
        descricao: true,
        valor_unitario: true
      }
    })

    return products
  }
}

export { ListProductsService }
