export class serviceCliente {
  async listaClientes() {
    const message = `Teste lista de clientes`
    return message
  }

  async adicionaCliente(nome) {
    return `Cliente ${nome} adicionado com sucesso!`
  }
}
