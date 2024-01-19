import { Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { ListUsersController } from './controllers/user/ListUsersController'
import { GetUserController } from './controllers/user/GetUserController'
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListProductsController } from './controllers/product/ListProductsController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

const router = Router()

router.post('/usuario', isAuthenticated, new CreateUserController().handle)
router.post('/login', isAuthenticated, new AuthUserController().handle)
router.get('/usuario', isAuthenticated, new GetUserController().handle)
router.get('/usuarios', isAuthenticated, new ListUsersController().handle)

router.post(
  '/categoria',
  isAuthenticated,
  new CreateCategoryController().handle
)
router.get('/categoria', isAuthenticated, new ListCategoryController().handle)

router.post('/produto', isAuthenticated, new CreateProductController().handle)
router.get('/produtos', isAuthenticated, new ListProductsController().handle)

export { router }
