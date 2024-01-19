import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
  email: string
  senha: string
}

class AuthSellerService {
  async execute({ email, senha }: AuthRequest) {
    const seller = await prismaClient.vendedor.findFirst({
      where: {
        email: email
      }
    })

    if (!seller) {
      throw new Error('Usuário e/ou senha incorretos')
    }
    const passwordMatch = await compare(senha, seller.senha)

    if (!passwordMatch) {
      throw new Error('Usuário e/ou senha incorretos')
    }

    // Gerar o token para o vendedor
    const token = sign(
      {
        nome: seller.nome,
        email: seller.email
      },
      process.env.JWT_SECRET,
      {
        subject: seller.id,
        expiresIn: '30d'
      }
    )

    return {
      id: seller.id,
      name: seller.nome,
      email: seller.email,
      token: token
    }
  }
}

export { AuthSellerService }
