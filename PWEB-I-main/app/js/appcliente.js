let cliente = new ClienteController;
let cont1 = new Conta('1', 100);
let cli1 = new Cliente('Gabriel', '123', cont1);
let cli2 = new Cliente('João', '457', cont1);
let cliespeci = new ClienteEspecial('Gabriel', '123', cont1);
cliespeci.inserir(cli1);
cliespeci.inserir(cli2);
cliespeci.inserir(cli1);
