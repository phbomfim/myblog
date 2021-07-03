---
title: Using Node.js and JWT to authentication
date: "2021-07-02"
tags: ["nodejs","insomnia"]
published: true
---

### Requeriments

1. NodeJS
2. Npm
3. Insomnia

### Ep. 1 - Conhecendo o blog/insomnia

1. Acessando ao Insomnia podemos definir algumas requisições padrão de acordo ao nosso projeto:
2. GET/ POST/ DELETE para trabalharmos com usuarios e posts
3. Definimos o nosso endereço de acordo ao servidor em funcionamento (no nosso caso, localhost:3000/)
4. Uma listagem em JSON é mostrada de acordo aos nossos resultados

### Ep. 2 - Entendendo funções de hashing

1. Definições sobre armazenamento de senhas ao nosso banco
2. Utilizando padrões de hash/SALT
3. Mais precisamente, usaremos o BCRYPT / BCRYPT.HASH

### Ep. 3 - Configurando a nossa proteção 

1. Instalando o bycript ```npm install bcrypt@3.0.8```
2. A chamada de função ```bcrypt``` é passada por 2 parametros: ```bcrypt.hash(senha, custoHash)```
3. Esse custo influencia no tempo de execução do algoritmo, quanto maior o custo, mais seguro o sistema é contra **ataques de força bruta**. Atualmente o valor 12 é o necessário para este caso, porém um valor deve ser definido de acordo ao caso específico, levando em consideração fatores como:
- Capacidade de processamento da sua máquina;
- Razão performance/segurança da sua aplicação;
- Tráfego do seu site;
- Capacidade computacional da época.
4. Materemos as validações padrões de senha e só alteraremos a chamada da variável de ```senha ``` para ```senhaHash```.

### Ep. 4 - Configurando estratégia local de autenticação

1. Instalaremos o passport ```npm install passport@0.4.1``` e o passport-local ```npm install passport-local@1.0.0```.
2. Após instalados, iremos iniciar a configuração da nossa estratégia de autenticação

### Ep. 5 - Implementando autenticação com JWT

1. Faremos a instalação do JWT utilizando o comando ```npm install jsonwebtoken@8.5.1```
2. Criamos uma função de geração de token a partir do payload
3. Antes de enviarmos a resposta do login, enviaremos ao header *Authorization* o token gerado
4. A resposta **204** indica que o cabeçalho contém informações importantes.
5. Para gerarmos uma senha secreta mais segura utilizaremos da biblioteca crypto a função *randomBytes* passando 256 carcteres dentro do formato *base64*.
6. Para isto, rodaremos no console ```node -e "console.log( require('crypto').randomBytes(256).toString('base64'))"```
7. Por questões de segurança armazenaremos nossa senha numa variável de ambiente (.env). Para o nosso código ter acesso à variáveis de ambiente, instalaremos a biblioteca dotenv ```npm install dotenv@8.2.0```
8. Feito isto, permitiremos o uso da variável em toda aplicação adcionando um require dentro do server.js.

### Ep. 6 - Estratégia pra JWT/ Tratando erros de login

1. Importanto o módulo da estratégia do token de autenticação(bearer token) ```npm install passport-http-bearer@1.0.1```
2. 