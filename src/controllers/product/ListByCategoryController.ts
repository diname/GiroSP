import { Request, Response } from 'express'
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const idCategoria = req.query.idCategoria as string
    const listByCategory = new ListByCategoryService()

    const products = await listByCategory.execute({ idCategoria })

    return res.json(products)
  }
}

export { ListByCategoryController }
