const Router = require('express').Router;
const UserController = require('../controller/UserController.js')
class User{
     router;

    constructor(){
        this.router = Router();

        this.getUserRoute();
        this.postUserRoute();
    
    }

    getUserRoute(){
        this.router.get('/login' , UserController.login)
    }
    postUserRoute(){

    }
}

module.exports = new User().router;