class ClienteController{

    private inputnome: HTMLInputElement;
    private inputcpf: HTMLInputElement;
    private campoul: HTMLUListElement
    private inputpesquisa: HTMLInputElement
    private pesquisacliente: HTMLUListElement;
    private classclientes: Clientes;



    constructor(){
        this.inputnome = document.querySelector<HTMLInputElement>('#nomecliente');
        this.inputcpf = document.querySelector<HTMLInputElement>('#cpfcliente');
        this.campoul = document.querySelector<HTMLUListElement>('#listaclientes');
        this.inputpesquisa = document.querySelector<HTMLInputElement>('#buscarcliente');
        this.pesquisacliente = document.querySelector<HTMLUListElement>("#resultadodabusca");
       this.classclientes = new Clientes();
    }

    criarCliente (): void{
        let inputnome = this.inputnome.value;
        let inputcpf = this.inputcpf.value;  
        let conta = new Conta("1", 100);

        let novoCliente = new Cliente(inputnome, inputcpf, conta);
        let verificador = this.classclientes.inserir(novoCliente);
        

        if(verificador){
            this.exibirCliente(novoCliente, conta);

        }else{
            alert("Aconteceu um problema!!!")
        }
    }

    exibirCliente(cliente:Cliente, conta:Conta): void{
        let li =  document.createElement("li");
        li.textContent = `Cliente: ${cliente} /  Conta => ${conta}`;

        let botaoapagar = document.createElement("button")
        botaoapagar.textContent = "X"

        botaoapagar.addEventListener('click', 
        (Event) =>{
            this.classclientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        }
        );
        li.appendChild(botaoapagar);
        this.campoul.appendChild(li);
    }

    pesquisa(){
        let pesquisa = this.inputpesquisa.value;
        let verificador = this.classclientes.pesquisar(pesquisa)
        if (verificador){
            this.exibircliente(verificador)
        }else{
            alert("Cliente não existe!!!")
        }

    }

    exibircliente(cliente:Cliente) : void{
        let li = document.createElement("li");
        li.textContent = `${cliente}`;

        this.pesquisacliente.appendChild(li);

    }


}