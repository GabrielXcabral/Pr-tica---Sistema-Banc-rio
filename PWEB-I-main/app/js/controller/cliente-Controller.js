class ClienteController {
    inputnome;
    inputcpf;
    campoul;
    inputpesquisa;
    pesquisacliente;
    classclientes;
    constructor() {
        this.inputnome = document.querySelector('#nomecliente');
        this.inputcpf = document.querySelector('#cpfcliente');
        this.campoul = document.querySelector('#listaclientes');
        this.inputpesquisa = document.querySelector('#buscarcliente');
        this.pesquisacliente = document.querySelector("#resultadodabusca");
        this.classclientes = new Clientes();
    }
    criarCliente() {
        let inputnome = this.inputnome.value;
        let inputcpf = this.inputcpf.value;
        let conta = new Conta("1", 100);
        let novoCliente = new Cliente(inputnome, inputcpf, conta);
        let verificador = this.classclientes.inserir(novoCliente);
        if (verificador) {
            this.exibirCliente(novoCliente, conta);
        }
        else {
            alert("Aconteceu um problema!!!");
        }
    }
    exibirCliente(cliente, conta) {
        let li = document.createElement("li");
        li.textContent = `Cliente: ${cliente} /  Conta => ${conta}`;
        let botaoapagar = document.createElement("button");
        botaoapagar.textContent = "X";
        botaoapagar.addEventListener('click', (Event) => {
            this.classclientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        li.appendChild(botaoapagar);
        this.campoul.appendChild(li);
    }
    pesquisa() {
        let pesquisa = this.inputpesquisa.value;
        let verificador = this.classclientes.pesquisar(pesquisa);
        if (verificador) {
            this.exibircliente(verificador);
        }
        else {
            alert("Cliente não existe!!!");
        }
    }
    exibircliente(cliente) {
        let li = document.createElement("li");
        li.textContent = `${cliente}`;
        this.pesquisacliente.appendChild(li);
    }
}
