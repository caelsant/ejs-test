const express = require("express");
var app = express();

var pessoas = [
    {
        nome: "Micael",
        sobrenome: "Santana"
    },
    {
        nome: "Tatiane",
        sobrenome: "Santana"
    }
]

app.set("view engine", "ejs");
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("index", {array: pessoas})
})

app.listen(9091, function(){
    console.log("Rodando");
})