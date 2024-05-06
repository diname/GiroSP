import express from 'express'
import { controllerUsuarios } from '../src/controllers/controllerUsuarios.js'
import { controllerConsultores } from '../src/controllers/controllerConsultores.js'
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Pagina inicial')
})
routes.get('/usuarios', new controllerUsuarios().listaUsuarios)
routes.get('/consultores', new controllerConsultores().listaConsultores)

export default routes
