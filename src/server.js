const express = require('express');
const mongoose = require ('mongoose');
const env = require('../environments/environment');
const router = require('./router/user')
const bodyParser = require('body-parser')

class Server {
    app = express();
    
     constructor(){
         this.useBodyParser();
        this.setConfiguration();
        this.setRouter();
        this.notFoundHandler();
        this.errorHandler();
    }

    setRouter(){
        this.app.use('/api/user', router)
    }

    setConfiguration(){
        this.setMongo();
    }

    setMongo(){
        mongoose.connect(env.db_url , {useNewUrlParser: true, useUnifiedTopology: true} , ()=>{
            console.log('Database Connected');
            
        })
    }

    notFoundHandler(){
        this.app.use((req,res)=>{
            res.status(404).json({
                message: "Not Found"
            })
        })
    }

    errorHandler(){
        this.app.use((error, req,res,next)=>{
            const errStatus = req.status || 500
            res.status(errStatus).json({
                message: error.message,
                statusCode: errStatus
            })
        })
    }

    useBodyParser(){
        this.app.use(bodyParser.urlencoded({extended: true}))

    }
}

module.exports = Server