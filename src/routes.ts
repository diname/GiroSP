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
import { ListByCategoryController } from './controllers/product/ListByCategoryController'
import { CreateSellerController } from './controllers/seller/CreateSellerController'
import { ListSellerController } from './controllers/seller/ListSellerController'
import { CreateClienteController } from './controllers/cliente/CreateClienteController'
import { ListClienteController } from './controllers/cliente/ListClienteController'
import { AuthSellerController } from './controllers/seller/AuthSellerController'

const router = Router()
// Login
router.post('/login', isAuthenticated, new AuthUserController().handle)
router.post(
  '/vendedor/login',
  isAuthenticated,
  new AuthSellerController().handle
)

// Usuários
router.post('/usuario', isAuthenticated, new CreateUserController().handle)
router.get('/usuario', isAuthenticated, new GetUserController().handle)
router.get('/usuarios', isAuthenticated, new ListUsersController().handle)

// Categoria
router.post(
  '/categoria',
  isAuthenticated,
  new CreateCategoryController().handle
)
router.get('/categoria', isAuthenticated, new ListCategoryController().handle)

// Produtos
router.post('/produto', isAuthenticated, new CreateProductController().handle)
router.get('/produto', isAuthenticated, new ListProductsController().handle)
router.get(
  '/produto/categoria',
  isAuthenticated,
  new ListByCategoryController().handle
)

// Vendedores
router.post('/vendedor', isAuthenticated, new CreateSellerController().handle)
router.get('/vendedor', isAuthenticated, new ListSellerController().handle)

// Clientes
router.post('/cliente', isAuthenticated, new CreateClienteController().handle)
router.get('/cliente', isAuthenticated, new ListClienteController().handle)

export { router }
