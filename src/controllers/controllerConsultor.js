import { serviceConsultor } from '../services/serviceConsultor.js'

export class controllerConsultor {
  async listaConsultores(req, res) {
    const service = new serviceConsultor()
    const consultores = await service.listaConsultores()
    return res.send(consultores)
  }
}
