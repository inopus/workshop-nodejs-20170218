#!/bin/env node

var express = require('express');
var app = express();

require('./db/conexao.js')();

app.set('view engine', 'ejs');

app.use(express.static('./views'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(bodyParser.json())

app.get('/hello_world', function (req, res) {
    res.render('paginas/hello_world');
});

app.get('/postar', function (req, res) {
    res.render('paginas/postar');
});

app.post('/postar/salvar', function (req, res) {
    var clt = dbCon[0].collection("Postagem");
    var postagem = {
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        postagem: req.body.postagem
    };
    clt.insert(postagem, {
        w: 1
    }, function (err, result) {
        if (err) {
            console.log("*** Erro: ");
            console.log(err);
            console.log("***");
            res.redirect("/?msg=erro");
        } else {
            res.redirect("/?msg=sucesso");
        }
    });
});

app.get('/detalhe', function (req, res) {
    res.render('paginas/datelhe');
});

app.get('/', function (req, res) {
    res.render('paginas/index', {
        msg: req.query.msg
    });
});

var porta = 8080;
app.listen(porta);
console.log("***** Servidor rodando na porta " + porta + " as " + new Date().toISOString() + " *****");