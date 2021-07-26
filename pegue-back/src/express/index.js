const express = require('express');
const consign = require('consign');
const cors = require('cors');
const bodyParser = require('body-parser')


module.exports = () => {        
        const app = express();      
        
        app.use((req, res, next) => {
                res.header("Access-Control-Allow-Origin", "*")
                app.use(cors());
                next();
        })

        app.use(bodyParser.urlencoded({ extended: true }))        
        app.use(bodyParser.json())

        consign()
                .include('/src/express/routes.js')
                .into(app)
        return app




        
}











