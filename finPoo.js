class OperacaoFinanceira {
	// Método abstrato para depósito
	depositar(valor) {
		throw new Error('Método abstrato. Implemente nas subclasses.');
	}

	// Método abstrato para saque
	sacar(valor) {
		throw new Error('Método abstrato. Implemente nas subclasses.');
	}
}

class Transacao extends OperacaoFinanceira {
	constructor(conta, valor) {
		super();
		this.conta = conta;
		this.valor = valor;
	}

	depositar() {
		this.conta.depositar(this.valor);
	}

	sacar() {
		this.conta.sacar(this.valor);
	}
}

class Cliente {
	constructor(nome, cpf) {
		(this.nome = nome), (this.cpf = cpf);
	}
}

class Conta extends OperacaoFinanceira {
	constructor(cliente, saldoInicial) {
		super();
		this.cliente = cliente;
		this.#saldo = saldoInicial || 0;
		this.#agencia = this.agencia = Math.floor(Math.random() * 9000) + 1000;
	}

	#agencia;
	#saldo;

	depositar(valor) {
		if (valor > 0) {
			this.#saldo += valor;
			console.log(`Deposito de ${valor} realizado.`);
		}
	}

	sacar(valor) {
		if (valor <= this.getSaldo()) {
			this.#saldo -= valor;
			console.log(`RECEBA R$${valor.toFixed(2)}! O MELHOR DO MUNDO PAE!`);
			return valor;
		} else {
			console.log(`Devolva... O pior do mundo mãe. Transação não realizada.`);
		}
	}

	getSaldo() {
		return this.#saldo;
	}

	realizarOperacao() {
		console.log('realizando operacao da classe Conta');
	}

	show() {
		console.log(
			`Nome: ${this.cliente.nome} | Agência: ${this.#agencia} | Saldo: ${this.getSaldo()} `
		);
	}
}

class ContaCorrente extends Conta {
	constructor(cliente, saldoInicial) {
		super(cliente, saldoInicial);
		this.#limiteCredito = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
	}
	#limiteCredito;
	#tipoConta = 'Conta Corrente';

	realizarOperacao() {
		console.log('realizando operacao da classe Conta Corrente.');
	}

	show() {
		super.show();
		console.log(`Tipo: ${this.#tipoConta}`);
	}
}

class ContaPoupança extends Conta {
	constructor(cliente, saldoInicial) {
		super(cliente, saldoInicial), (this.#juros = 1.5);
	}

	#juros;
	#tipoConta = 'Conta Poupança';

	realizarOperacao() {
		console.log('realizando operacao da classe Poupança.');
	}

	show() {
		super.show();
		console.log(`Tipo: ${this.#tipoConta}`);
	}
}

function line() {
	console.log('----------------------------------------');
}

function testaPrograma() {
	const cliente = new Cliente('Gabriel Betini', '37176920893');
	const conta = new ContaCorrente(cliente);
	const cliente2 = new Cliente('Maria Quero', '14387829987');
	const conta2 = new ContaPoupança(cliente2);

	function mostraTudo() {
		conta.show();
		conta2.show();
		line();
	}

	mostraTudo();

	const transacaoDeposito = new Transacao(conta, 1300);
	transacaoDeposito.depositar();
	const transacaoDeposito2 = new Transacao(conta2, 1300);
	transacaoDeposito2.depositar();
	line();

	mostraTudo();

	const transacaoSaque = new Transacao(conta, 320);
	transacaoSaque.sacar();
	const transacaoSaque2 = new Transacao(conta2, 195);
	transacaoSaque2.sacar();
	line();

	mostraTudo();
}

testaPrograma();
