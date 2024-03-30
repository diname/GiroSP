import prismaClient from '../../prisma'

interface ProductRequest {
  descricao: string
  valorUnitario: number
  idCategoria: string
}

class CreateProductService {
  async execute({ descricao, valorUnitario, idCategoria }: ProductRequest) {
    const product = await prismaClient.produto.create({
      data: {
        descricao: descricao,
        valor_unitario: valorUnitario,
        id_categoria: idCategoria
      }
    })
    return product
  }
}

export { CreateProductService }
