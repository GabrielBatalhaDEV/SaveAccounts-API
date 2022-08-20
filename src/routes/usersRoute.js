const {Router} = require("express");
const router = Router()

const { usersCreateController } = require("../controllers/usersCreateController");



router.post("/user", usersCreateController);


module.exports = router