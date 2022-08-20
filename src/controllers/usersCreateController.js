const { usersCreateService } = require("../services/usersCreateService")


async function usersCreateController(req, res){



  const user = await usersCreateService(req.body)

  res.status(201).json(user)

}

module.exports = {usersCreateController}