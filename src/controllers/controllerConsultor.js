import { serviceConsultor } from '../services/serviceConsultor.js'

export class controllerConsultor {
  async listaConsultores(req, res) {
    const consultores = await new serviceConsultor().listaConsultores()
    return res.send(consultores)
  }

  async adicionaConsultor(req, res) {
    const { nome, email } = req.body
    const consultor = await new serviceConsultor().adicionaConsultor(
      nome,
      email
    )
    return res.status(201).send(consultor)
  }
}
