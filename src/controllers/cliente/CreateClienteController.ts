import { Request, Response } from 'express'
import { CreateClienteService } from '../../services/cliente/CreateClienteService'

class CreateClienteController {
  async handle(req: Request, res: Response) {
    const { razaoSocial, nomeFantasia, cnpj, email, endereco, telefone, site } =
      req.body

    const clienteService = new CreateClienteService()
    const cliente = await clienteService.execute({
      razaoSocial,
      nomeFantasia,
      cnpj,
      email,
      endereco,
      telefone,
      site
    })

    return res.json(cliente)
  }
}

export { CreateClienteController }
