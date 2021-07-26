const ProdutosM = require('../database/models/produtos')
const UsuariosM  = require('../database/models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class Crud {   
    /////////////////////////////////////////////////////////////////////////////////////////
    async registrar(req, res) {
        console.log(req.body)

        if (req.body.password !== req.body.confirmPassword) {
           return res.status(200).json({message: "Os passwords não coincidem." })
        }

        const resultados = await UsuariosM.findOne({where: {email:req.body.email}})
        if (resultados) {
            res.status(200).json({ message:"E-mail já cadastrado." })
            return}


        const nome = req.body.nome;
        const email = req.body.email;
        const password = req.body.password;
        
        
        let senha = await bcrypt.hash(password, 8);   
        let createdAt =  new Date;
        let updatedAt = new Date;
       
       
        
        
        const inf = await UsuariosM.create({
            id:'',
            nome:nome,
            senha:senha,
            email:email,
            createdAt:createdAt,
            updatedAt:updatedAt          
        })

        return res.json({message:'Cliente Cadastrado com sucesso', inf})

    } 
    
    /////////////////////////////////////////////////////////////////////////////////////////   
    async login(req, res) {

        console.log(req.body)

        let email = req.body.email;
        let password = req.body.password;

        const resultados = await UsuariosM.findOne({where: {email:email}})
        
        if(!resultados){
         return   res.json({message:"Email não encontrado"})
        }  
        if(resultados) {

            bcrypt.compare(password, resultados.dataValues.senha, async (erro, result) => {

                if (erro) {
                   return res.status(400).json(erro)                                      
                }
    
                if (result) {                    
                    let token = await jwt.sign({
                        user_id: resultados.dataValues.id,
                        token: true
                    }, 'PL', 
                    {
                        subject: resultados.dataValues.email,
                        expiresIn: "2000s"
                    });                                     
                    return res.status(201).json({ message: "Usuario logado.", "token": token })
                
                } else {
    
                   return res.status(200).json({message:"Senhas não bateram."})                    
                }     
            });
        }  
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    async listarusuarios(req,res){

        const resultados = await UsuariosM.findAll()
        return res.status(200).json({resultados})


    }

    





    /*


    
    listarTodos(req,res){

    }

    listarUm(req,res){

    }

    atualiza(req,res){

    }

    delete(req,res){

    }
    */

}


module.exports = new Crud;