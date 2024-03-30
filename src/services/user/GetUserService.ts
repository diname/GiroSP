import prismaClient from '../../prisma'

class GetUserService {
  async execute(user_id: string) {
    const user = await prismaClient.usuario.findFirst({
      where: {
        id: user_id
      },
      select: {
        id: true,
        status: true,
        codigo_usuario: true,
        nome: true,
        email: true,
        cpf: true
      }
    })

    return user
  }
}

export { GetUserService }
