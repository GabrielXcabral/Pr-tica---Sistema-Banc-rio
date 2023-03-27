class Clientes {
    clientes;
    constructor() {
        this.clientes = Array();
    }
    //     inserir, que recebe um parâmetro do tipo Cliente 
    //     inserirá um cliente no array de clientes da classe Clientes
    // 2.2 remover, que recebe um cpf e removerá o cliente daquele cpf, se existir
    // 2.3 listar, que devolverá um array de Cliente
    // 2.4 pesquisar, que receberá o cpf do cliente e devolverá o cliente encontrado (se encontrar)
    inserir(cliente) {
        this.clientes.push(cliente);
        return cliente;
    }
    remover(cpf) {
        let index = this.clientes.findIndex(local => local.cpf == cpf);
        if (index > -1) {
            this.clientes.splice(index, 1);
        }
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(pessoa => pessoa.cpf === cpf);
    }
}
