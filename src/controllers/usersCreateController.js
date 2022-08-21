const { usersCreateService } = require("../services/usersCreateService")


async function usersCreateController(req, res){

  const {name, email, password} = req.body

  const user = await usersCreateService({name, email, password})

  res.status(201).json(user)

}

module.exports = {usersCreateController}