import { serviceConsultor } from '../services/serviceConsultor.js'

export class controllerConsultor {
  async listaConsultores(req, res) {
    const consultores = await new serviceConsultor().listaConsultores()
    return res.send(consultores)
  }

  async adicionaConsultor(req, res) {
    const consultor = await new serviceConsultor().adicionaConsultor()
    return res.send(consultor)
  }
}
