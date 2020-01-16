//bibliotecas sendo utilizadas tranformando em variaveis constantes
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://logfy:padrao123@cluster0-ovxvc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

app.use(express.json());
    // usar o arquivo que referencia as rotas tem de ser abaixo da utilização de json
app.use(routes);



//MongoDB (Não-relacional)




app.listen(3333);