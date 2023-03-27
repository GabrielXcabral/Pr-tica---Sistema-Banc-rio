class Clientes {
    private clientes:  Array<Cliente>;

    constructor (){
        this.clientes = Array<Cliente>();

    }

//     inserir, que recebe um parâmetro do tipo Cliente 
//     inserirá um cliente no array de clientes da classe Clientes

// 2.2 remover, que recebe um cpf e removerá o cliente daquele cpf, se existir

// 2.3 listar, que devolverá um array de Cliente

// 2.4 pesquisar, que receberá o cpf do cliente e devolverá o cliente encontrado (se encontrar)

inserir(cliente: Cliente) : Cliente{
    this.clientes.push(cliente); 
    return cliente;  
}

remover (cpf: String) : void{
    let index = this.clientes.findIndex(local => local.cpf == cpf);
    if(index > -1){
        this.clientes.splice(index, 1);
    }


}

listar(): Array<Cliente>{
    return this.clientes;
}

pesquisar(cpf: string): Cliente {
    return this.clientes.find(
        pessoa => pessoa.cpf === cpf
    );
}







}