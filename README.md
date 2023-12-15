# Projeto Bancário FinPOO  🏦💻

Este é um projeto bancário desenvolvido em JavaScript, utilizando conceitos de Programação Orientada a Objetos (POO). O projeto apresenta uma estrutura de classes que representam operações financeiras, transações, clientes e diferentes tipos de contas bancárias, como Conta Corrente e Conta Poupança.

## Estrutura do Projeto 🏗️

### `OperacaoFinanceira`
- Classe base que define métodos abstratos para depósito e saque.
  
### `Transacao`
- Herda de `OperacaoFinanceira`.
- Responsável por realizar transações de depósito e saque em uma conta específica.

### `Cliente`
- Representa um cliente com nome e CPF.

### `Conta`
- Herda de `OperacaoFinanceira`.
- Representa uma conta bancária genérica.
- Contém métodos para depósito, saque, exibição de saldo e realização de operações.

### `ContaCorrente`
- Herda de `Conta`.
- Representa uma conta corrente com limite de crédito adicional.

### `ContaPoupança`
- Herda de `Conta`.
- Representa uma conta poupança com taxa de juros.

## Funcionalidades 🚀

- **Depósito e Saque:** Realização de operações de depósito e saque em contas.
- **Contas Específicas:** Conta Corrente e Conta Poupança estendem a funcionalidade básica de Conta.
- **Transações:** Utilização da classe `Transacao` para efetuar transações em contas específicas.
- **Clientes:** Cadastro de clientes associados às contas.

## Executando o Projeto ▶️

1. Clone este repositório.
2. Abra o projeto em um ambiente de desenvolvimento JavaScript.
3. Execute o arquivo principal (por exemplo, `index.js`) no console.

```bash
node index.js
