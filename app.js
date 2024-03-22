//AULA 22/03/2024

const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
app.engine("handlebars", handlebars({defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Novidades no APP.JS e cnfiguração das rotas de POST
//Implementação da biblioteca BodyParse
const bodyParser = require("body-parser");
const post = require("./models/post");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.listen("8081", function(){
    console.log("Servidor Ativo!");
})

app.get("/", function(req, res){
    res.render("cadastrar")
})

app.get("/consultar", function(req, res){
    res.render("consultar")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        res.redirect("/");
    }).catch(function(erro){
        res.send("Falha ao cadastrar os dados " + erro);
    })
})