const mongoose = require("mongoose")

await mongoose.connect("mongodb://localhost:27017/AccountsSave", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})


export {mongoose}