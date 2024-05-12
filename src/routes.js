import express from 'express'
import { controllerUsuario } from '../src/controllers/controllerUsuario.js'
import { controllerConsultores } from '../src/controllers/controllerConsultores.js'
import { controllerClientes } from './controllers/controllerClientes.js'
import { controllerCategorias } from './controllers/controllerCategorias.js'
import { controllerProdutos } from './controllers/controllerProdutos.js'
import { controllerProposta } from './controllers/controllerProposta.js'
import { controllerProdutosProposta } from './controllers/controllerProdutosProposta.js'
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Pagina inicial')
})
routes.get('/usuarios', new controllerUsuario().usuarios)
routes.get('/consultores', new controllerConsultores().listaConsultores)
routes.get('/clientes', new controllerClientes().listaClientes)
routes.get('/categorias', new controllerCategorias().listaCategorias)
routes.get('/produtos', new controllerProdutos().listaProdutos)
routes.get('/propostas', new controllerProposta().listaPropostas)
routes.get(
  '/produtos/:proposta',
  new controllerProdutosProposta().listaProdutosProposta
)

export default routes
