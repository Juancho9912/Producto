/** Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const db = require("./model/db-connection/mongodb.js")

/** configuración de la app */
const app = express();
db();
const port = config.get("server-port");
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser)

/** Methods */   //req es request , res es response o respuesta
app.get("/",(req,res,next)=>{
    res.send("Welcome to academic rest api");
});

const productRoutes = require("./routes/product.routes.js");
productRoutes(app);

app.listen(port, ()=>{
    console.log("Server is running...");
})
