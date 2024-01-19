import { Request, Response } from 'express'
import { ListSellerService } from '../../services/seller/ListSellerService'

class ListSellerController {
  async handle(req: Request, res: Response) {
    const listSeller = new ListSellerService()
    const sellers = await listSeller.execute()
    return res.json(sellers)
  }
}

export { ListSellerController }
