import { serviceProposta } from '../services/serviceProposta.js'

export class controllerProposta {
  async listaPropostas(req, res) {
    const service = new serviceProposta()
    const propostas = await service.listaPropostas()
    return res.send(propostas)
  }
}
