import { Request, Response } from 'express'
import { ListUsersService } from '../../services/user/ListUsersController'

class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsers = new ListUsersService()
    const users = await listUsers.execute()

    return res.json(users)
  }
}

export { ListUsersController }
