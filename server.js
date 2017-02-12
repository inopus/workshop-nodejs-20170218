#!/bin/env node

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index
app.get('/', function (req, res) {
    res.render('paginas/index');
});

var porta = 8080;
app.listen(porta);
console.log("***** Servidor rodando na porta " + porta + " as " + new Date().toISOString() + " *****");