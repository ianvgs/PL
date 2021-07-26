const customExpress = require('./src/express');
const sequelize = require('./src/database/index');


async function myFunction(){
    await sequelize.authenticate().then(console.log('Conexão com o banco de dados: ok.'));   
    const app = customExpress();
    app.listen(3333, console.log({message:'Servidor:On.'}));
    console.log('Servidor rodando na porta 3333')    
}

myFunction();




