import express from 'express'
import { controllerUsuarios } from '../controllers/controllerUsuarios.js'
const router = express.Router()

router.get('/', (req, res) => {
  return res.send('Hello World!')
})
router.get('/usuarios', new controllerUsuarios().listaUsuarios)

export default router
