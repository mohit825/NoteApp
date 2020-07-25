const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        required: true,
        default: new Date()
    },
    updated_at:{
        type: Date,
        required: true,
        default: new Date()
    },
    // verified:{
    //     type:Boolean,
    //     required: false
    // },
    // verfication_token:{
    //     type:Number,
    //     required: true
    // },
    // verfication_token_time:{
    //     type: Date,
    //     required: true
    // }

});

module.exports = mongoose.model('users', userSchema);