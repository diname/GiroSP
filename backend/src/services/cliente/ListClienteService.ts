import prismaClient from '../../prisma'

class ListClienteService {
  async execute() {
    const clientes = await prismaClient.cliente.findMany({
      select: {
        codigo_cliente: true,
        razao_social: true,
        nome_fantasia: true,
        cnpj: true,
        email: true,
        telefone: true
      }
    })
    return clientes
  }
}

export { ListClienteService }
