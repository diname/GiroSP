import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface SellerRequest {
  nome: string
  email: string
  senha: string
  cpf: string
  rg?: string
}

class CreateSellerService {
  async execute({ nome, email, senha, cpf, rg }: SellerRequest) {
    if (!email) {
      throw new Error('Email incorreto')
    }

    const sellerAlreadyExist = await prismaClient.vendedor.findFirst({
      where: {
        email: email
      }
    })

    if (sellerAlreadyExist) {
      throw new Error('Vendedor já existe!')
    }

    const passwordHash = await hash(senha, 8)

    const seller = await prismaClient.vendedor.create({
      data: {
        nome: nome,
        email: email,
        senha: passwordHash,
        cpf: cpf,
        rg: rg
      },
      select: {
        status: true,
        codigo_vendedor: true,
        nome: true,
        email: true,
        senha: true,
        cpf: true,
        rg: true
      }
    })
    return seller
  }
}

export { CreateSellerService }
