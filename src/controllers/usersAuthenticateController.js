const { usersAuthenticateService } = require("../services/usersAuthenticateService");


async function usersAuthenticateController(req, res){

  const {email, password} = req.body

  const token = await usersAuthenticateService({email, password})

  res.json({token})
}

module.exports = {usersAuthenticateController}