const express = require("express")
require("express-async-errors");
require('dotenv').config()
const usersRoutes = require("./routes/usersRoute")
const {handleError} = require("./resources/errors/handleErrors")

const cors = require("cors")
const app = express()




app.use(cors());
app.use(express.json());
app.use(usersRoutes)
app.use(handleError)


app.listen(process.env.PORT,() => console.log(`AccountSaveAPI listening http://localhost:${process.env.PORT}`))