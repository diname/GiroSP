import prismaClient from '../../prisma'

interface ProductRequest {
  descricao: string
  valorUnitario: number
}

class CreateProductService {
  async execute({ descricao, valorUnitario }: ProductRequest) {
    const product = await prismaClient.produto.create({
      data: {
        descricao: descricao,
        valor_unitario: valorUnitario
      }
    })
    return product
  }
}

export { CreateProductService }
