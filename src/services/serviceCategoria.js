export class serviceCategoria {
  async listaCategorias() {
    const message = `Teste lista de categorias`
    return message
  }

  async adicionaCategoria(nome) {
    return `Categoria ${nome} adicionada com sucesso!`
  }
}
