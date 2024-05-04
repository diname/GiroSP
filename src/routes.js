import express from 'express'
import { ControllerUsuarios } from '../controllers/ControllerUsuarios.js'
const router = express.Router()

router.get('/', (req, res) => {
  return res.send('Hello World!')
})

router.get('/usuarios', new ControllerUsuarios())
export default router
