const {userModel} = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken")
const {secret} = require("../config/auth.json")

async function usersAuthenticateService({email, password}){

  if(!email || !password){
    throw {message: "Empty Fields", status: 400}
  }

  const user = await userModel.findOne({email})

  if(!user){
    throw {message: "Login/Password incorrect", status: 401}
  }

  const password_match = await bcrypt.compare(password, user.password)

  if(!password_match){
    throw {message: "Login/Password incorrect", status: 401}
  }

  const token = sign(
    {
      user: user.email,
    },
    secret,
    {
      subject: user.id,
      expiresIn: "1d",
    })

  return token
  
}

module.exports = {usersAuthenticateService}
