import prismaClient from '../../prisma'

interface ClienteRequest {
  razaoSocial: string
  nomeFantasia: string
  cnpj: string
  email: string
  endereco?: string
  telefone?: string
  site?: string
}

class CreateClienteService {
  async execute({
    razaoSocial,
    nomeFantasia,
    cnpj,
    email,
    endereco,
    telefone,
    site
  }: ClienteRequest) {
    const cliente = await prismaClient.cliente.create({
      data: {
        razao_social: razaoSocial,
        nome_fantasia: nomeFantasia,
        cnpj: cnpj,
        email: email,
        endereco: endereco,
        telefone: telefone,
        site: site
      }
    })
    return cliente
  }
}

export { CreateClienteService }
