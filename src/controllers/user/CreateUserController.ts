import { Request, Response } from 'express'

import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha, cpf, rg } = req.body

    const createUserService = new CreateUserService()
    const user = await createUserService.execute({
      nome,
      email,
      senha,
      cpf,
      rg
    })
    return res.json(user)
  }
}

export { CreateUserController }
