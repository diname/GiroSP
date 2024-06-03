export class serviceCliente {
  async listaClientes() {
    return `Teste lista de clientes`
  }

  async adicionaCliente(nome) {
    return `Cliente ${nome} adicionado com sucesso!`
  }
}
