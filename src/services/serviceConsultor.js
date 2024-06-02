export class serviceConsultor {
  async listaConsultores() {
    const result = `Teste lista de consultores`
    return result
  }
  async adicionaConsultor(nome, email) {
    return `Consultor ${nome} adicionado com sucesso!`
  }
}
