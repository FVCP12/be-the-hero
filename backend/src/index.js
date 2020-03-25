const express = require('express'); // importando todas as funcionalidades do express
const cors = require('cors');
const routes = require('./routes'); //importando a routes

const app = express(); // inicializa a aplicação na variavel

app.use(cors());
app.use(express.json()); //aqui eu digo que o corpo enviado via post sera em json
app.use(routes);


app.listen(3333); //deixa a aplciação aberta passando a porta 

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

/* bloco de codigo exportado para o routes.js
app.get('/', (request, response) => {  //criando rota principal (com o /), e passando um funcao como parametro
    //return response.send('Hello Word'); // text simples
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Felipe Vieira do Carmo Pereira'
    });
});
*/
/* colocado la em cima para facilitar
app.listen(3333); //deixa a aplciação aberta passando a porta 
*/
