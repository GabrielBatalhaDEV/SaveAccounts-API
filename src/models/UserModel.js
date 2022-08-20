const {mongoose} = require("../database")
const uuid = require("uuid").v4;

const userSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    unique: true,
    default: uuid(),
    immutable: true
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
    immutable: true,
  }
})

const userModel = mongoose.model("User",userSchema)

module.exports = {userModel}