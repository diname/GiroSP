import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
  email: string
  senha: string
}

class AuthUserService {
  async execute({ email, senha }: AuthRequest) {
    const user = await prismaClient.usuario.findFirst({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new Error('Usuário e/ou senha incorretos')
    }
    const passwordMatch = await compare(senha, user.senha)

    if (!passwordMatch) {
      throw new Error('Usuário e/ou senha incorretos')
    }

    // Gerar o token para o usuário
    const token = sign(
      {
        nome: user.nome,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.nome,
      email: user.email,
      token: token
    }
  }
}

export { AuthUserService }
