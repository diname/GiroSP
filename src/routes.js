import express from 'express'
import { controllerUsuario } from '../src/controllers/controllerUsuario.js'
import { controllerConsultor } from '../src/controllers/controllerConsultor.js'
import { controllerCliente } from './controllers/controllerCliente.js'
import { controllerCategoria } from './controllers/controllerCategoria.js'
import { controllerProduto } from './controllers/controllerProduto.js'
import { controllerProposta } from './controllers/controllerProposta.js'
import { controllerProdutosProposta } from './controllers/controllerProdutosProposta.js'
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Pagina inicial')
})
routes.get('/usuarios', new controllerUsuario().usuarios)
routes.get('/consultores', new controllerConsultor().listaConsultores)
routes.get('/clientes', new controllerCliente().listaClientes)
routes.get('/categorias', new controllerCategoria().listaCategorias)
routes.get('/produtos', new controllerProduto().listaProdutos)
routes.get('/propostas', new controllerProposta().listaPropostas)
routes.get(
  '/produtos/:proposta',
  new controllerProdutosProposta().listaProdutosProposta
)

export default routes
