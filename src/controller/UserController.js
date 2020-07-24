
class UserController {
    static  login(req,res,next){
        const err = new Error('User does not Exist')
        next(err);
    }
}

module.exports = UserController;