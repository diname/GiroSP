import prismaClient from '../../prisma'

class ListCategoryService {
  async execute() {
    const category = await prismaClient.categoria.findMany({
      select: {
        id: true,
        nome_categoria: true,
        codigo_categoria: true
      }
    })
    return category
  }
}

export { ListCategoryService }
