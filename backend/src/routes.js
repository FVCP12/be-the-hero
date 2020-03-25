const express = require('express'); // importando todas as funcionalidades do express

const ongController = require('./controllers/OngControlller');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


/**
 * Metodos http
 * 
 * GET: Buscar uma informacao do back-end
 * post: Criar uma informacao no back-end
 * put: altera uma informacao no back-end
 * delete: Deletar uma informacao no back-end
 * 
*/

/**
  * Tipos de parametro:
  * 
  * Query Params: parametros nomeados enviados na rota apos "?" (Filtros, paginacao) <request.query>
  * Route Params: paremetros utilizados para identificacao recursos <request.params> (nesse a rota tem que ter /:<algum nome>)
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos <request.body>
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index); 
routes.post('/ongs', ongController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);



module.exports = routes; //expostando uma varaivel dentro do arquivo usando o node