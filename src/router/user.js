const Router = require('express').Router;

const UserValidator = require('../middleware/UserValidator')

const UserController = require('../controller/UserController.js')
class User{
     router;

    constructor(){
        this.router = Router();

        this.getUserRoute();
        this.postUserRoute();
    
    }

    getUserRoute(){
    }
    postUserRoute(){
        
        this.router.post('/signup' , UserValidator.validateUser(), UserController.signup)
    }
}

module.exports = new User().router;