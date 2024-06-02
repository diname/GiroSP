import { serviceProposta } from '../services/serviceProposta.js'

export class controllerProposta {
  async listaPropostas(req, res) {
    const propostas = await new serviceProposta().listaPropostas()
    return res.send(propostas)
  }

  async adicionaProposta(req, res) {
    const { nrProposta } = req.body
    const proposta = await new serviceProposta().adicionaProposta(nrProposta)
    return res.status(201).send(proposta)
  }
}
