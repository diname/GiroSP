import express from 'express'
import { controllerUsuarios } from '../controllers/controllerUsuarios.js'
import { controllerConsultores } from '../controllers/controllerConsultores.js'
const router = express.Router()

router.get('/', (req, res) => {
  return res.send('Pagina inicial')
})
router.get('/usuarios', new controllerUsuarios().listaUsuarios)
router.get('/consultores', new controllerConsultores().listaConsultores)

export default router
