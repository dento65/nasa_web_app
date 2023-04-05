const mongoose = require("mongoose")
// const DB = process.env.DATABASE
// const DB = "mongodb://127.0.0.1:27017/mydatabase";
const DB =
  "mongodb+srv://zaiddento:mi3HF-8RGj5J4Kz@cluster0.3tqgcv3.mongodb.net/?retryWrites=true&w=majority";
console.log(process.env.port);
mongoose
  .connect(process.env.MONGODB_URI || DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("The connection is successful"))
  .catch((err) => console.log("There is no connection"));