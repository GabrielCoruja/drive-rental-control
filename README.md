# Projeto de Locadora de Carros

## Descrição

Este projeto consiste em uma aplicação web para gerenciamento de uma locadora de carros. A aplicação permite o controle eficiente dos automóveis da empresa, motoristas, e o registro detalhado da utilização de cada veículo.

## Funcionalidades

### Cadastro de Automóveis:

- Adicionar novos carros à frota.
- Atualizar informações de carros existentes.
- Excluir carros da base de dados.
- Recuperar detalhes de um carro pelo seu identificador único.
- Listar carros cadastrados, com opção de filtrar por cor e marca.

### Cadastro de Motoristas:

- Registrar novos motoristas.
- Atualizar informações de motoristas existentes.
- Excluir motoristas da base de dados.
- Recuperar detalhes de um motorista pelo seu identificador único.
- Listar motoristas cadastrados, com opção de filtrar por nome.

### Utilização de Automóveis:

- Criar registros de utilização de um automóvel por um motorista, com data de início e motivo.
- Finalizar a utilização de um automóvel por um motorista, registrando a data de conclusão.
- Listar os registros de utilização, exibindo o nome do motorista e informações do automóvel utilizado.

### Regras de Negócio:

- Um carro só pode ser utilizado por um motorista por vez.
- Um motorista só pode utilizar um carro por vez.
- Um carro só pode ser utilizado por um motorista se estiver disponível.

## Tecnologias Utilizadas

|      Linguages       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| Node.JS | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=nodejs&perline=1" /></a> |
| TypeScript | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=typescript&perline=1" /></a> |
| Express.js | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=express&perline=1" /></a> |
| Sequeize | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=sequelize&perline=1" /></a> |
| MySQL | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=mysql&perline=1" /></a> |
| SQLITE | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=sqlite&perline=1" /></a> |
| Docker | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=docker&perline=1" /></a> |
| Jest | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=jest&perline=1" /></a> |
| VS Code | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=vscode&perline=1" /></a> |
| Git | <a href="https://skillicons.dev"> <img src="https://skillicons.dev/icons?i=git&perline=1" /></a> |


## Como Executar o projeto:

### Pré-requisitos

- [Node.JS](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/engine/install/)

### Instalação

1. Clone o repositório
   ```sh
   git clone git@github.com:GabrielCoruja/drive-rental-control.git
    ```

2. Instale os pacotes NPM
   ```sh
   npm install
    ```

3. Inicie o banco de dados e a aplicação

<details>
  <summary>Start da aplicação com Docker</summary>

- Para subir a aplicação e o banco de dados, execute o comando:

    ```sh
   docker-compose up -d --build
    ```

Obs: Utilizando o docker os dados serão persistidos utilizando o MySQL.

</details>

<details>
  <summary>Start da aplicação localmente</summary>

- Contrução das tabelas no banco de dados:

    ```sh
   npm run build && npm run db:migrate && npm run db:seed
    ```

- Start da aplicação:

    ```sh
   npm run dev
    ```

Obs: Utilizando localmente os dados serão persistidos utilizando o SQLite.

</details>

4. O projeto terá como base o endpoint em http://localhost:3001

### Testes

Para executar os testes, execute o comando:
```sh
npm run test
```

### Documentação

A documentação da API pode ser acessada em http://localhost:3000/api-docs




