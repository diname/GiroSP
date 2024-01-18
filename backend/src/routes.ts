import { Router } from 'express'

// Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { ListUsersController } from './controllers/user/ListUsersController'

const router = Router()

router.post('/usuario', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.get('/usuarios', new ListUsersController().handle)

export { router }
