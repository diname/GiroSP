import { serviceConsultor } from '../services/serviceConsultor.js'

export class controllerConsultor {
  async listaConsultores(req, res) {
    const consultores = await new serviceConsultor().listaConsultores()
    return res.send(consultores)
  }

  async adicionaConsultor(req, res) {
    const { nome, email, senha, cpf, rg } = req.body
    const consultor = await new serviceConsultor().adicionaConsultor(
      nome,
      email,
      senha,
      cpf,
      rg
    )
    return res.status(201).send(consultor)
  }
}
