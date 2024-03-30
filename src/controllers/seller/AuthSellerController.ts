import { Request, Response } from 'express'
import { AuthSellerService } from '../../services/seller/AuthSellerService'

class AuthSellerController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body

    const authSeller = new AuthSellerService()
    const auth = await authSeller.execute({ email, senha })

    return res.json(auth)
  }
}

export { AuthSellerController }
