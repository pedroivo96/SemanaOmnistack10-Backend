const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ilfss.mongodb.net/week10?retryWrites=true&w=majority' ,{
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
});

//express.json() deve estar antes de routes para que a aplicação "entenda" JSON dentro das rotas
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de Parâmetros

//Query params: request.query (Filtros, Ordenação, Paginação, ...)
//Route params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);