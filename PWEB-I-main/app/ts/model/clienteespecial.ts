class ClienteEspecial extends Cliente{
    private dependentes: Array<Cliente>

    constructor(nome:string, cpf:string, conta:Conta){
        super(nome,cpf,conta);
        this.dependentes = Array<Cliente>();

    }

    inserir(cliente:Cliente): void{

        if(this.cpf != cliente.cpf){
            console.log('Essa conta não pode ser vinculada a esse cliente especial');
            return undefined;
        }
        
        if(this.dependentes.some(depende => depende.cpf == cliente.cpf)){
            console.log('Essa conta já faz parte desse cliente');
            return undefined;

        }
        
        this.dependentes.push(cliente); 
    }
}