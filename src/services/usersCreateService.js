const {userModel} = require("../models/UserModel")
const bcrypt = require("bcrypt")

async function usersCreateService({name, email, password}){

      if(!name || !email || !password){
          console.log("Fields Empty");
      }

      const userAlreadyExists = await userModel.findOne({email})

      if(userAlreadyExists){
        throw {message: "Email already exist", status: 400}
      }

      const passwordHash = bcrypt.hashSync(password, 8)

      await userModel.create({
        name,
        email,
        password: passwordHash
      })

      const user = await userModel.findOne({email})

      return user
}

module.exports = {usersCreateService}