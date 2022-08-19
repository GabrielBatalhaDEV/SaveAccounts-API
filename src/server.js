const express = require("express")
require("express-async-errors");
const cors = require("cors")
require('dotenv').config()

const app = express()


app.use(cors());
app.use(express.json());


app.listen(process.env.PORT,() => console.log(`AccountSaveAPI listening ${process.env.PORT}`))