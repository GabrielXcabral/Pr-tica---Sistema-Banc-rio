let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const c2 = new Conta('1', 200);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
// 3. Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar,
//  remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado)
let cl1 = new Cliente("Gabriel", "111.111.111-11", c1);
let cl2 = new Cliente("Samuel", "111", c2);
let objCliente = new Clientes;
//insere
objCliente.inserir(cl1);
objCliente.inserir(cl2);
//lista
console.log(objCliente.listar());
//busca
console.log(objCliente.pesquisar("111.111.111-11"));
//remover
objCliente.remover("111");
console.log(objCliente.listar());
