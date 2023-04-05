const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });

require("./db/conn");

app.use(cookieParser());
app.use(express.json());

// linking router file using middleware
app.use(require("./router/auth"));

const PORT = process.env.PORT || 8000;
console.log(2546)
if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));
  
}
app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));


// Your code
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}
// Your code
