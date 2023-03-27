/*Desenvolver a classe Cliente, contendo como atributos:
nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set*/
class Cliente {
    _nome;
    _cpf;
    _conta;
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
    toString() {
        let texto = `Nome: ${this._nome} - CPF: ${this._cpf}`;
        return texto;
    }
}
