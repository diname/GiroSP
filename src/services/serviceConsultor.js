export class serviceConsultor {
  async listaConsultores() {
    return `Teste lista de consultores`
  }
  async adicionaConsultor(nome, email) {
    return `Consultor ${nome} adicionado com sucesso!`
  }
}
