
class UserController {
    static  login(req,res,next){
        console.log(req.body);
        
        res.send(req.body)
    }
}

module.exports = UserController;