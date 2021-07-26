const Crud = require('../controllers/clientes')

//const authMiddleware = require('./auth');

module.exports = app => {  
  /*
  //Deleta informando id.
  app.delete('/produtos/', async (req, res) => {
    Crud.delete(req,res)
  }) 

  //
  app.patch('/produtos/', async (req, res) => {
    Crud.atualiza(req, res)
  })

  //Lista produtos
  app.get('/produtoss/', async (req,res)=>{
    Crud.listarTodos(req,res)
  })*/

  //Lista PRODUTOS.
  app.get('/listarusuarios/',async (req, res)=>{
    Crud.listarusuarios(req,res)
  })

  //Cadastra o cliente
  app.post('/register/',  async (req, res) => {    
    Crud.registrar(req,res)
  })
  //Cadastra o cliente
  app.post('/login/',  async (req, res) => { 
    console.log(req.body)    
    Crud.login(req,res)
  })

  

}


/*Middleware para checar autorização da rota '/listartodos/'
const aut = function (req, res, next) {  
  const autorizacao = req.headers.authorization;
  if (!autorizacao) {
    res.status(401).json({ message: "Requisição não autorizada." })
    return
  }
  const [ ,auth] = autorizacao.split('Bearer ');
  console.log(auth)  
  if(auth === "csp"){
  return next();
  }         
   
  return res.status(401).json({ message: "Autorização invalida." })
  
}*/













