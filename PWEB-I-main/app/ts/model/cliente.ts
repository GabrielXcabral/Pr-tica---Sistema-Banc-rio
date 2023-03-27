/*Desenvolver a classe Cliente, contendo como atributos: 
nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set*/

class Cliente{
    private _nome : string;
    private _cpf : string;
    private _conta: Conta;

    constructor(nome:string, cpf: string, conta: Conta){
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;

    }

    get nome (): string {
        return this._nome;
    }

    set nome (nome: string){
        this._nome = nome;
    }

    get cpf (): string{
        return this._cpf;
    }

    set cpf (cpf: string){
        this._cpf = cpf;
    }

    get conta (): Conta{
        return this._conta
    }

    set conta (conta: Conta){
        this._conta = conta;
    }

    toString(): string{
        let texto = `Nome: ${this._nome} - CPF: ${this._cpf}`;
        return texto
    }
   
}