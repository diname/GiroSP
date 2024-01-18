import prismaClient from '../../prisma'

class ListUsersService {
  async execute() {
    const users = await prismaClient.usuario.findMany({
      select: {
        status: true,
        codigo_usuario: true,
        nome: true,
        email: true,
        cpf: true
      }
    })

    return users
  }
}

export { ListUsersService }
