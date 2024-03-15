//1° PASSO - organizando o Express e o Handlebars

//Declarando os módulos e instanciando
const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
//Definindo o uso do handlebars na renderização e na visualização
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//2° PASSO - iniciar o servidor e conferir se está tudo certo com console.log
// Inicia o servidor Express na porta 8081
app.listen("8081", function(){
    console.log("Servidor Ativo!");
   });

//3° PASSO - configurar as rotas para cada página
app.get("/", function(req, res){
    // Renderizando a view 'index' 
    res.render("index");
   }); 
app.get("/consultar", function(req, res){
    // Renderizando a view 'consultar'
    res.render("consultar");
   });