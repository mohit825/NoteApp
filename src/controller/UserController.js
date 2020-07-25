const User  = require('../models/UserModel');
const { validationResult } = require('express-validator');


class UserController {

    static  async signup(req,res,next){
        console.log('in usercontroller');
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        //todo use destructring
        const email  = req.body.email;
        const password  =  req.body.password;
        const userName = req.body.userName;

        let user  =  new User({email:email, password:password, userName:userName});
        let storedUser  = await user.save();

        res.status(200).json({
            'message': "User Saved Successfully"
        })

    }
}

module.exports = UserController;