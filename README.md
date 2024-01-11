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
npm test
```

### Documentação

O projeto possui 3 endpoints, sendo eles:

#### Carros

- Url base: http://localhost:3001/cars

<details>
  <summary>GET /cars</summary>

- Retorna todos os carros cadastrados.


- Endpoind com filtros:

    - GET /cars?color=red
    - GET /cars?brand=Chevrolet
    - GET /cars?color=red&brand=Chevrolet

- Exemplo de resposta:

    ```json
    [
      {
        "licensePlateId": "ABC-1234",
        "name": "Corsa",
        "brand": "Chevrolet",
        "color": "red"
      },
      {
        "licensePlateId": "DEF-5678",
        "name": "Opala",
        "brand": "Chevrolet",
        "color": "gray"
      },
      {
        "licensePlateId": "GHI-9012",
        "name": "Uno",
        "brand": "Fiat",
        "color": "blue"
      }
    ]
    ```
</details>

<details>
  <summary>GET /cars/:id</summary>

- Retorna os detalhes de um carro específico.

- Endpoint com parâmetro:

    - GET /cars/ABC-1234

- Exemplo de resposta:

    ```json
    {
      "licensePlateId": "ABC-1234",
      "name": "Corsa",
      "brand": "Chevrolet",
      "color": "red"
    }
    ```

- Exemplo de resposta com carro não encontrado:

    ```json
    {
      "message": "Car not found"
    }
    ```

</details>

<details>
  <summary>POST /cars</summary>

- Cria um novo carro.

- Exemplo de requisição:

    ```json
    {
      "licensePlateId": "AAA-9999",
      "name": "Ferrari 93",
      "brand": "Ferrari",
      "color": "red"
    }
    ```
    ```
- Exemplo de resposta:

    ```json
    {
      "licensePlateId": "AAA-9999",
      "name": "Ferrari 93",
      "brand": "Ferrari",
      "color": "red"
    }
    ```
    ```
</details>

<details>
  <summary>PUT /cars/:id</summary>

- Atualiza as informações de um carro específico.

- Endpoint com parâmetro:

    - PUT /cars/AAA-9999

- Exemplo de requisição:

    ```json
    {
      "name": "Ferrari 93",
      "brand": "Ferrari",
      "color": "red"
    }
    ```

- Exemplo de resposta:

    ```json
    {
      "licensePlateId": "AAA-9999",
      "name": "Ferrari 93",
      "brand": "Ferrari",
      "color": "red"
    }
    ```

- Exemplo de resposta com carro não encontrado:

    ```json
    {
      "message": "Car not found"
    }
    ```

</details>

<details>
  <summary>DELETE /cars/:id</summary>

- Exclui um carro específico.

- Endpoint com parâmetro:

    - DELETE /cars/AAA-9999

- Resposta sem corpo.

- Exemplo de resposta com carro não encontrado:

    ```json
    {
      "message": "Car not found"
    }
    ```

</details>


#### Motoristas

- Url base: http://localhost:3001/drivers

<details>
  <summary>GET /drivers</summary>

- Retorna todos os motoristas cadastrados.

- Endpoint com filtros:

    - GET /drivers?fullname=Silva

- Exemplo de resposta:

    ```json
    [
      {
        "id": 1,
        "fullName": "Lucas Silva",
        "email": "lucas.silva@email.com",
      },
      {
        "id": 2,
        "fullName": "João Silva",
        "email": "joao.silva@email.com",
      }
    ]
    ```

</details>

<details>
  <summary>GET /drivers/:id</summary>

- Retorna os detalhes de um motorista específico.

- Endpoint com parâmetro:

    - GET /drivers/1

- Exemplo de resposta:

    ```json
    {
      "id": 1,
      "fullName": "Lucas Silva",
      "email": "lucas.silva@email.com",
    }
    ```

- Exemplo de resposta com motorista não encontrado:

    ```json
    {
      "message": "Driver not found"
    }
    ```

</details>

<details>
  <summary>POST /drivers</summary>

- Cria um novo motorista.

- Exemplo de requisição:

    ```json
    {
      "fullName": "Gabriel Silva",
      "email": "gabriel.silva@email.com",
    }
    ```

- Exemplo de resposta:

    ```json
    {
      "id": 3,
      "fullName": "Gabriel Silva",
      "email": "gabriel.silva@email.com",
    }
    ```

</details>

<details>
  <summary>PUT /drivers/:id</summary>

- Atualiza as informações de um motorista específico.

- Endpoint com parâmetro:

    - PUT /drivers/3

- Exemplo de requisição:

    ```json
    {
      "fullName": "Gabriel Coruja",
      "email": "update.email@email.com",
    }
    ```

- Exemplo de resposta:

    ```json
    {
      "id": 3,
      "fullName": "Gabriel Coruja",
      "email": "update.email.com",
    }
    ```

- Exemplo de resposta com motorista não encontrado:

    ```json
    {
      "message": "Driver not found"
    }
    ```

</details>

<details>
  <summary>DELETE /drivers/:id</summary>

- Exclui um motorista específico.

- Endpoint com parâmetro:

    - DELETE /drivers/3

- Resposta sem corpo.

- Exemplo de resposta com motorista não encontrado:

    ```json
    {
      "message": "Driver not found"
    }
    ```

</details>

#### Aluguel de Carros

- Url base: http://localhost:3001/rentals

<details>
  <summary>GET /rentals/:driverId</summary>

- Retorna todos os registros de aluguel de um motorista específico.

- Endpoint com parâmetro:

    - GET /rentals/1

- Exemplo de resposta:

    ```json
    [
      {
        "id": 3,
        "fullname": "Maria Silva",
        "email": "maria.silva@email.com",
        "rentalCars": [
          {
            "licensePlateId": "GHI-9012",
            "name": "Chevette",
            "brand": "Chevrolet",
            "color": "blue",
            "RentalCarModel": {
              "startDate": "2024-01-11T15:07:17.053Z",
              "endDate": "2024-01-11T15:07:17.053Z",
              "description": "job"
            }
          },
          {
            "licensePlateId": "ABC-1234",
            "name": "Corsa",
            "brand": "Chevrolet",
            "color": "red",
            "RentalCarModel": {
              "startDate": "2024-01-11T15:07:17.053Z",
              "endDate": "2024-01-11T15:07:17.053Z",
              "description": "job"
            }
          }
        ],
      },
    ]
    ```

- Exemplo de resposta com motorista não encontrado:

    ```json
    {
      "message": "Driver not found"
    }
    ```

</details>

<details>
  <summary>POST /rentals</summary>

- Cria um novo registro de aluguel de carro.

- Exemplo de requisição:

    ```json
    {
      "driverId": 1,
      "licensePlateId": "GHI-9012",
      "description": "job"
    }
    ```

- Exemplo de resposta:

    ```json
    {
      "driverId": 1,
      "licensePlateId": "GHI-9012",
      "star": "2024-01-11T15:07:17.053Z",
      "endDate": "2024-01-11T15:07:17.053Z",
      "description": "job"
    }
    ```

- Exemplo de carro ou motorista vinculado a outro aluguel:

    ```json
    {
      "message": "Car or Driver already in use"
    }
    ```

</details>

<details>
  <summary>PUT /rentals/:driverId</summary>

- Finaliza um registro de aluguel de carro.

- Endpoint com parâmetro:

    - PUT /rentals/1

- Exemplo de resposta:

    ```json
    {
      "driverId": 1,
      "licensePlateId": "GHI-9012",
      "star": "2024-01-11T15:07:17.053Z",
      "endDate": "2024-01-11T15:07:17.053Z",
      "description": "job"
    }
    ```

- Exemplo de resposta com motorista não encontrado:

    ```json
    {
      "message": "Driver not found"
    }
    ```

</details>
