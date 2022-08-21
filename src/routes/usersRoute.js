const {Router} = require("express");
const router = Router()

const { usersCreateController } = require("../controllers/usersCreateController");
const { usersAuthenticateController } = require("../controllers/usersAuthenticateController");




//Users
router.get("/auth", usersAuthenticateController)
router.post("/user", usersCreateController);



module.exports = router