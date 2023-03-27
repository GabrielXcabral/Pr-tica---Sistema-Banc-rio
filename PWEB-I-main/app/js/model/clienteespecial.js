class ClienteEspecial extends Cliente {
    dependentes;
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = Array();
    }
    inserir(cliente) {
        if (this.cpf != cliente.cpf) {
            console.log('Essa conta não pode ser vinculada a esse cliente especial');
            return undefined;
        }
        if (this.dependentes.some(depende => depende.cpf == cliente.cpf)) {
            console.log('Essa conta já faz parte desse cliente');
            return undefined;
        }
        this.dependentes.push(cliente);
    }
}
