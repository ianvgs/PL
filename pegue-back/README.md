   Manual de instalação

Necessário ter Node.js instalado na máquina e banco MySQL com as seguintes configurações:
    "username": "root",
    "password":" ",    
    "host": "localhost",
    "port":3306,
*Neste projeto utilizei password vazio e a database será criada através de scripts a seguir.


Realizar o download do código, extrair, acessar o diretório e no terminal comandar os scripts:
1- NPM install 
2 - Npx sequelize db:create
3 - Npx sequelize db:migrate
4 - Npx sequelize db:seed:all
5 - Npm start
Pronto, já está criado o database “csp”, as tabelas “clientes” e “telefones”, e já foi feito o povoamento das tabelas com 4 registros cada.


**************ROTAS*********************************
Key e valures: Somente é aceito os atibutos e valores através de requisições JSON/URLencoded, ou seja, através do body da requisição.

POST: http://localhost:3000/clientes/
Função: Cadastra um cliente com os atributos abaixo:
Key e values obrigatórios: primeiroNome, ultimoNome, email, telefone0.
Key e values opcionais: telefone1, telefone2, telefone3, telefone4, telefone5, telefone6, telefone7, telefone8, telefone9, telefone10.

GET : http://localhost:3000/clientes/
Função: Lista registros informando o atributo primeiroNome e/ou email:
Key e values obrigatórios: primeiroNome  e/ou email.

PATCH : http://localhost:3000/clientes/
Função: Altera registros informando o ID que deseja alterar e informando os outros dados que deseja alterar conforme atributos abaixo:
Key e values obrigatórios: ID.
Key e values opcionais:  primeiroNome, ultimoNome, email, telefone0, telefone1, telefone2, telefone3, telefone4, telefone5, telefone6, telefone7, telefone8, telefone9, telefone10.

DEL : http://localhost:3000/clientes/
Função: deleta um registro informando o Id do mesmo:
 Key e values obrigatórios: ID.


***************ROTA BONUS********************************
GET : http://localhost:3000/todosclientes/ 
Função: Lista todos os clientes da tabela clientes
 *Obrigatório informar no headers authorization Bearer Token : ”csp”.


TESTES JEST/SUPERTEST
Deixar o servidor rodando em um terminal, abrir outro terminal e rodar: NPM test.

