//requerer um metodo especifico dentro de express
const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchCOntroller = require('./controllers/SearchController');

const routes = Router();

// Metodos HTTP: get(receber), post(informar), put(atualizar), delete

//parametros
//Query Params: req.query (Filtros, ordenação, paginação...)
//Rout Params:  req.params(identificar um recurso  na alteração  remoção)
//Body: req.body (Dados para criação ou a alteração de um registro)

routes.get('/devs', DevController.index); // Pegar registros
routes.post('/devs', DevController.store); // Adicionar Registros

routes.get('/search', SearchCOntroller.index);

//exportar para o arquivo principal
module.exports = routes;