var express = require("express");
var usuariosRuta = require("./rutas/usuarios");
const session = require("express-session");
require("dotenv").config();   

var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usuariosRuta);

app.use(session({
  secret:process.env.SESSION_SECRETO,
  resave:true,
  saveUninitialized:true
}))


var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto:${port}`);
});
