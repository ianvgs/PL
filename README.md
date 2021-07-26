# PL
 Projeto fullstack (back em node.js/postgres e front em react)


Manual de instalação/Uso
BACK-END

Necessário ter Node.js instalado na máquina e banco Postgresql com as seguintes configurações:
    "username": "postgres",
    "password":"root",    
    "host": "localhost",
    "port":6666,
*database será criada através de scripts a seguir.

Realizar o download do código, extrair, acessar o diretório “PEGUE-BACK”e no terminal comandar os scripts:
1- NPM install 
2 - Npx sequelize db:create
3 - Npx sequelize db:migrate
4 - Npx sequelize db:seed:all
5 - Npm start
Pronto, já está criado o database “PL”, as tabelas “usuarios” e “produtos”, e já foi feito o povoamento das tabelas.
Servidor vai subir na porta 3333.

ROTAS

POST: http://localhost:3333/register/
Função: Cadastra um usuário:
Key e values obrigatórios: nome, email, password, confirmPassword.

POST http://localhost:3333/login/
Função: realizar login
Key e values obrigatórios: email,password.


GET : http://localhost:3333/listarusuarios/
Função: Lista todos os usuários da tabela usuarios
Key e values obrigatórios: primeiroNome  e/ou email.

*Observações: API feita para receber requisições JSON E URLENCODED, requisições através de params não foram tratadas nesse projeto.


	FRONT-END


Realizar o download do código, extrair, acessar o diretório “PEGUE-FRONT”e no terminal comandar os scripts: 
1 -NPM INSTALL
2- NPM START

A aplicação vai subir na porta 3000.














