const {body}  =  require('express-validator');

class UserValidator{
    static validateUser(){
        console.log('in middleware class');
        
        return(
            [ 
                body('email' , 'Please enter an Email').isEmail(),
                body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long')
    
            ]
        )
    }
}

module.exports = UserValidator;