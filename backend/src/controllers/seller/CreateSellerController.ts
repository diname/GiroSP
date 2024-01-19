import { Request, Response } from 'express'
import { CreateSellerService } from '../../services/seller/CreateSellerService'

class CreateSellerController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha, cpf, rg } = req.body

    const sellerService = new CreateSellerService()

    const seller = await sellerService.execute({ nome, email, senha, cpf, rg })

    return res.json(seller)
  }
}

export { CreateSellerController }
