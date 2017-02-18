#!/bin/env node

dbCon = new Array(); // Array para armazenar todas as conexões com os BDs

mongodb = require('mongodb');

module.exports = function () {
    mongodb.MongoClient.connect("mongodb://localhost:27017/db", function (err, conn) {
        if (err) {
            console.log('Houve um erro na conexão com o BD. Erro: ' + err);
            dbCon[0] = undefined;
        } else {
            console.log('Conexão com o BD criada com sucesso!');
            dbCon[0] = conn;
        }
    });
}