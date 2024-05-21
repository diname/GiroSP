import { serviceProposta } from '../services/serviceProposta.js'

export class controllerProposta {
  async listaPropostas(req, res) {
    const propostas = await new serviceProposta().listaPropostas()
    return res.send(propostas)
  }

  async adicionaProposta(req, res) {
    const proposta = await new serviceProposta().adicionaProposta()
    return res.send(proposta)
  }
}
