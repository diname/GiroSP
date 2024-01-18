import { Router } from 'express'

// Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'

const router = Router()

router.post('/usuarios', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)

export { router }
