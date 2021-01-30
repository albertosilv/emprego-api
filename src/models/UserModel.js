const mongoose = require('../database')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

const User= mongoose.model('Consultation', UserSchema)

module.exports = User;