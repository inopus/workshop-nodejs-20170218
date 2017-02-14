#!/bin/env node

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./views'));

app.get('/hello_world', function (req, res) {
    res.render('paginas/hello_world');
});

app.get('/', function (req, res) {
    res.render('paginas/index');
});

app.get('/sobre', function (req, res) {
    res.render('paginas/sobre');
});

var porta = 8080;
app.listen(porta);
console.log("***** Servidor rodando na porta " + porta + " as " + new Date().toISOString() + " *****");