
### POC

Este projeto é uma prova de conceito no qual temos a integração entre Node.js e Postgres, utilizando Prisma e técnicas como clean code e solid 

<br>
<br>
<br>

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Exemplos](#exemplos)
- [Instruções de Uso](#instruções-de-uso)
- [Configuração](#configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

<br>
<br>
<br>

## Requisitos

É Nessário ter instalado o Git, Node.js, ter acesso ao banco de dados Postgres, 
ter acesso ao github.

Usamos como ferramenta de testes para o projeto o postman, mas use qualquer 
ferramenta de testes de API que se sentir confortável

<br>
<br>
<br>

## Instalação

#### FAÇA UM CLONE DO PROJETO:

```bash
> git clone https://github.com/antalvarga/POC
> cd _POC

npm install   # ou
yarn install
```

#### CRIE A CONEXÃO COM O POSTGRES:

Caso não tenha o Postgres, sugiro que utilize o neon; é um serviço de banco de 
dados Postgres, on-line e gratuito: 
<br>
https://neon.tech

#### CRIE A REQUEST NO POSTMAN:
Crie uma request do verbo POST, utilizando em 'body' do tipo json conforme a es
trutura abaixo:
```
{
    
    "username": "ikvarga11",
    "name": "Istvan Karoly Varga11",
    "email": "ikvarga11@gmail.com",
    "whatsapp": "21999999999",
    "password": "123456",
    "birth": "1939-05-09T03:00:00.000Z",
    "secret": "nanan"
}
```

#### OU CRIE A REQUEST NO VSCODE:

Instale a extensão "Rest Client"
Crie o arquivo src/infra/requests/user/User.rest com o conteúdo de exemplo:

<br>
<br>
<br>


## Exemplos

#### PARA OBTER UMA LISTA USUÁRIO UTILIZANDO O "Rest Client"

No arquivo User.rest crie uma requisição conforme abaixo:

```
# get all
GET 
http://localhost:3333/users
###
```
<br>

#### PARA INSERIR UM USUÁRIO UTILIZANDO O "Rest Client"

No arquivo User.rest crie uma requisição conforme abaixo:

```
# create
POST http://localhost:3333/users
Content-Type: application/json

{
    "name": "nuuuzzuuuu12",
    "whatsapp": "21988999999",
    "email": "nuuuuuuu12@gmail.com.br",
    "password": "123456",
    "birth" : "1969-10-14T22:57:00.893Z"    
}
###
```

<br>
<br>
<br>

## Instruções de Uso

#### Segue o passo a passo.

Estando no ambiente/servidor dev

```
> npm run dev
```
<br>
Aparecerá a mensagem:

```
> backend@1.0.0 dev
> nodemon --watch 'src' --exec 'ts-node ./server.ts' -e ts

[nodemon] 3.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts
[nodemon] starting `ts-node ./server.ts`
:: routes :: user
Database :: postgresql
Server is running in port 3333 ...
```
<br>
Com isso podemos disparar as requisições, dadas nos exemplos acima:
<br>
Caso 1 - POST: Utilizando o postman
<br>
URL : {{URL}}user

<br>
BODY/RAW - JSON

```
{
    
    "username": "ikvarga12",
    "name": "Istvan Karoly Varga12",
    "email": "ikvarga12@gmail.com",
    "whatsapp": "21999999999",
    "password": "123456",
    "birth": "1939-05-09T03:00:00.000Z",
    "secret": "nanan"
}

```

No postman eu salvei essa request com o nome Create_User_Zod
<br>
<br>
Recebemos a resposta abaixo: 

```
{
    "status": 200,
    "message": "Usuário criado",
    "value": "4aa0c018-e927-49be-a6c0-227e4a07d0ba",
    "data": {
        "id": "4aa0c018-e927-49be-a6c0-227e4a07d0ba",
        "username": "ikvarga12",
        "name": "INONO Kanono Vanono12",
        "email": "ikvanono12@gmail.com",
        "whatsapp": "21999999999",
        "password": "$2b$12$icgQC8rERpHcBtJJC5XImeiMD.7Fidezlx3O4mCB/Ut1be55rCCBi",
        "birth": "1939-05-09T03:00:00.000Z",
        "secret": "a3f4578c185a2c4d014c6a616b502a7af3d85c87e8b85dc4c7fd4a4cc2ecb961"
    }
}
```

Se por acaso, o usuário já existir será disparado uma mensagem de erro. Esta rotina foi desenvolvida usando um middleware de tratamento de erros 


<br>
Caso 2 - GET: Utilizando o postman
<br>
URL: http://localhost:3333/user?page=1&limit=10&filter=
<br>

Recebemos a resposta abaixo: 

```
{
    "tablename": "users",
    "totalRecords": 13,
    "recordsRead": 10,
    "pagination": {
        "page": "1",
        "pagesize": "10",
        "totalpages": 2
    },
    "data": [
        {
            "id": "$2b$12$dXzdvtNoMdfRx/dQ14HIdu",
            "username": "ikvarga12",
            "name": "INONO Kanono Vanono12",
            "email": "ikvnono12@gmail.com",
            "whatsapp": "21999999999",
            "password": "$2b$12$kbMzd4xU8vIl8rTE0NI/iezHrr6Qg9vPbNWcW.56rbmd4SKrFsObu",
            "birth": "1939-05-09T03:00:00.000Z",
            "secret": "6ecdbeaba80ca973bdd5f32672e94752a238875ba98c2b2a5f500133a273706c"
        }
    ]
}
```

<br>
<br>
<br>

## Configuração

#### TODAS AS CONFIGURAÇÕES FORAM INFORMADAS

O arquivo .env precisa ter os valores conforme abaixo:

```
PORT=3333
DATABASE_URL=
```
A string de conexão ou DATABASE_URL pode ser obtida através do seu neon.tech 
ou de alguma IDE para SGBD, como por exemplo o dbeaver 

Caso seja necessária alguma configuração adicional, esta será apresentada aqui


<br>
<br>
<br>

## Contribuição


20240115: Testes e-mail
20240115: Envio de e-mail
20240201: Tratamento de erros


#### QUALQUER CONTRIBUIÇÃO É BEM VINDA! 

Caso tenha alguma critica ou queira contribuir:

. Faça um fork do projeto 
<br>
. Crie uma branch para poder contribuir 
<br>
. Faça commit das suas alterações 
<br>
. Envie uma PR
<br>

<br>
<br>
<br>

## Licença

#### VOCÊ É LIVRE PARA USAR

Caso queira contribuir, siga os passos da [Contribuição](#contribuição).

<br>
<br>
<br>

## Contato

#### Dúvidas ou sugestões 

Espero que tenha gostado. Casos tenha dúvidas ou queira entrar em contato: 

* Email: asvarga@gmail.com
* Github: https://github.com/antalvarga

<br>
<br>
<br>
