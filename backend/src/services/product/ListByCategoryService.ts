import prismaClient from '../../prisma'

interface ProductRequest {
  idCategoria: string
}

class ListByCategoryService {
  async execute({ idCategoria }: ProductRequest) {
    const findByCategory = await prismaClient.produto.findMany({
      where: {
        id_categoria: idCategoria
      }
    })
    return findByCategory
  }
}

export { ListByCategoryService }
