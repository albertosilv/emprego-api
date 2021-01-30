const express = require('express')
const User = require('../models/UserModel')
class Usuario{
    static async register(req,res){
        const{ nome,email, senha, dataDeNascimento} = req.body
        try{
            const user = await User.create({
                nome,email,senha,dataDeNascimento
            })
            return res.status(200).json(user)

        }
        catch(err){
            return res.status(400).json({'erro':err})
        }

    }
}

module.exports = Usuario