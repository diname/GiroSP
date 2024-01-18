import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'

const router = Router()

router.post('/usuarios', new CreateUserController().handle)

export { router }
