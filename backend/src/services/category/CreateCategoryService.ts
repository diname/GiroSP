import prismaClient from '../../prisma'

interface CategoryRequest {
  nome: string
}

class CreateCategoryService {
  async execute({ nome }: CategoryRequest) {
    const category = await prismaClient.categoria.create({
      data: {
        nome_categoria: nome
      }
    })
    return category
  }
}

export { CreateCategoryService }
