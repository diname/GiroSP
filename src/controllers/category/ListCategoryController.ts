import { Request, Response } from 'express'
import { ListCategoryService } from '../../services/category/ListCategoryService'

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCatergory = new ListCategoryService()
    const category = await listCatergory.execute()

    return res.json(category)
  }
}

export { ListCategoryController }
